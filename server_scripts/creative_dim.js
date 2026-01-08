// File: server_scripts/dimension_inventory_manager.js

// Define your custom dimension
const CREATIVE_DIMENSION = 'create_dd:ponder';
const MAIN_WORLD = 'minecraft:overworld';

// Load CuriosApi via reflection
const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');

// Function to check if player has any items in Curios slots
function hasCuriosItems(player) {
  try {
    if (!CuriosApi.getCuriosHelper().getEquippedCurios(player).isPresent()) {
      return false;
    }
    
    let curios = CuriosApi.getCuriosHelper().getEquippedCurios(player).resolve().get();
    
    for (let i = 0; i < curios.getSlots(); i++) {
      let item = curios.getStackInSlot(i);
      if (!item.isEmpty()) {
        return true;
      }
    }
    
    return false;
  } catch (e) {
    console.log(`ERROR checking Curios inventory: ${e}`);
    return false; // Default to false on error to not block command
  }
}

// Register the dimension toggle command
ServerEvents.commandRegistry(event => {
  const { commands } = event;
  
  event.register(
    commands.literal('dimtoggle')
      .executes(context => {
        try {
          var playerr = context.source.getPlayer();
          if (!playerr) {
            context.source.sendFailure(Text.of('§cThis command must be run by a player'));
            return 0;
          }
          
          // Check if player has items in Curios slots
          if (hasCuriosItems(playerr)) {
            context.source.sendFailure(Text.of('§cYou cannot use this command while having items in your Curios slots. Please remove all Curios items first.'));
            return 0;
          }
          
          var currentD = playerr.level.dimension.toString();
          
          if (currentD === CREATIVE_DIMENSION) {
            // Player is in creative dimension, teleport back to main world
            console.log(`DEBUG: Player ${playerr.username} is in creative dimension, preparing to return to main world`);
            
            // Save current position in creative dimension before teleporting
            playerr.persistentData.creativePosX = playerr.x;
            playerr.persistentData.creativePosY = playerr.y;
            playerr.persistentData.creativePosZ = playerr.z;
            
            // Save regular inventory
            playerr.persistentData.put("creativeInventory", playerr.nbt.get("Inventory"));
            console.log(`DEBUG: Saved creative regular inventory for ${playerr.username}`);
            
            // Clear regular inventory
            playerr.inventory.clear();
            
            // Get saved position from when player left the main world
            let savedX = playerr.persistentData.mainPosX || 0;
            let savedY = playerr.persistentData.mainPosY || 70;
            let savedZ = playerr.persistentData.mainPosZ || 0;
            
            // Remove the flag that indicates player is in creative dimension
            playerr.persistentData.inCreativeDimension = false;
            
            // Teleport to main world at the saved position
            playerr.server.runCommandSilent(`execute in ${MAIN_WORLD} run tp ${playerr.username} ${savedX} ${savedY} ${savedZ}`);
            playerr.server.runCommandSilent(`effect clear ${playerr.username}`);
            playerr.server.runCommandSilent(`gamemode survival ${playerr.username}`);
            
            playerr.server.scheduleInTicks(5, () => {
              if (playerr.persistentData.mainInventory) {
                playerr.inventory.load(playerr.persistentData.get("mainInventory"));
                playerr.inventoryMenu.broadcastFullState();
                console.log(`DEBUG: Restored main world regular inventory for ${playerr.username}`);
              } else {
                console.log(`DEBUG: No main world inventory found to restore for ${playerr.username}`);
              }
              
              playerr.tell(Text.of('§aTeleported back to main world and restored inventory'));
            });
            
          } else if (currentD === MAIN_WORLD) {
            // Player is in overworld, teleport to creative dimension
            console.log(`DEBUG: Player ${playerr.username} is in main world, preparing to go to creative dimension`);
            
            // Save regular inventory
            playerr.persistentData.put("mainInventory", playerr.nbt.get("Inventory"));
            console.log(`DEBUG: Saved main world regular inventory for ${playerr.username}`);
            
            // Save current position before teleporting
            playerr.persistentData.mainPosX = playerr.x;
            playerr.persistentData.mainPosY = playerr.y;
            playerr.persistentData.mainPosZ = playerr.z;
            
            // Set flag to indicate player is in creative dimension
            playerr.persistentData.inCreativeDimension = true;
            
            // Clear regular inventory
            playerr.inventory.clear();
            playerr.server.runCommandSilent(`effect clear ${playerr.username}`);
            
            // Get saved position from creative dimension or use default
            let savedX = playerr.persistentData.creativePosX || 0;
            let savedY = playerr.persistentData.creativePosY || 10;
            let savedZ = playerr.persistentData.creativePosZ || 0;
            
            // Teleport to creative dimension at the saved position
            playerr.server.runCommandSilent(`execute in ${CREATIVE_DIMENSION} run tp ${playerr.username} ${savedX} ${savedY} ${savedZ}`);
            playerr.server.runCommandSilent(`gamemode creative ${playerr.username}`);
            
            playerr.server.scheduleInTicks(5, () => {
              if (playerr.persistentData.creativeInventory) {
                playerr.inventory.load(playerr.persistentData.get("creativeInventory"));
                playerr.inventoryMenu.broadcastFullState();
                console.log(`DEBUG: Restored creative dimension regular inventory for ${playerr.username}`);
              } else {
                console.log(`DEBUG: No creative inventory found to restore for ${playerr.username}`);
              }
              
              playerr.tell(Text.of('§aTeleported to creative dimension and saved inventory'));
            });
          } else {
            // Player is in neither the overworld nor the creative dimension
            context.source.sendFailure(Text.of('§cYou must be in the overworld to use this command'));
            return 0;
          }
          
          return 1;
        } catch (e) {
          console.log(`ERROR in dimension toggle command: ${e.stack || e}`);
          context.source.sendFailure(Text.of('§cAn error occurred while executing the command'));
          return 0;
        }
      })
  );
});
let diedInCreative = {};

EntityEvents.death('player', event => {
  const playerr = event.player;
  const dimension = playerr.level.dimension.toString();
  
  // Check if player died in creative dimension
  if (dimension === CREATIVE_DIMENSION) {
    console.log(`DEBUG: Player ${playerr.username} died in creative dimension`);
    
    // Set flag for this player
    diedInCreative[playerr.username] = true;
    
    // Clear the creative dimension inventory in persistent data
    if (playerr.persistentData.creativeInventory) {
      playerr.persistentData.remove("creativeInventory");
      console.log(`DEBUG: Cleared creative inventory for ${playerr.username} due to death`);
    }
    
    // Remove creative dimension flag
    playerr.persistentData.inCreativeDimension = false;
  } else {
    // Player died in a different dimension
    console.log(`DEBUG: Player ${playerr.username} died in ${dimension}`);
    
    // Make sure the flag is false
    diedInCreative[playerr.username] = false;
    
    // If player dies in main world, clear their saved main world inventory
    if (dimension === MAIN_WORLD && playerr.persistentData.mainInventory) {
      playerr.persistentData.remove("mainInventory");
      playerr.persistentData.remove("mainPosX");
      playerr.persistentData.remove("mainPosY");
      playerr.persistentData.remove("mainPosZ");
      playerr.persistentData.inCreativeDimension = false;
      console.log(`DEBUG: Cleared main world inventory and position for ${playerr.username} due to death in main world`);
    }
  }
});

// Handle player respawn
PlayerEvents.respawned(event => {
  const playerr = event.player;
  const username = playerr.username;
  
  // Check if this player died in creative dimension
  if (diedInCreative[username] === true) {
    console.log(`DEBUG: Handling respawn for ${username} who died in creative dimension`);
    
    // Clear the flag
    diedInCreative[username] = false;
    
    // Clear inventory and effects
    playerr.inventory.clear();
    playerr.server.runCommandSilent(`effect clear ${username}`);
    
    // Get saved position from main world
    let savedX = playerr.persistentData.mainPosX || 0;
    let savedY = playerr.persistentData.mainPosY || 70;
    let savedZ = playerr.persistentData.mainPosZ || 0;
    
    // Teleport to main world at saved position
    playerr.server.runCommandSilent(`execute in ${MAIN_WORLD} run tp ${username} ${savedX} ${savedY} ${savedZ}`);
    playerr.server.runCommandSilent(`gamemode survival ${username}`);
    
    // Schedule inventory restoration
    playerr.server.scheduleInTicks(10, () => {
      if (playerr.persistentData.mainInventory) {
        playerr.inventory.load(playerr.persistentData.get("mainInventory"));
        playerr.inventoryMenu.broadcastFullState();
        console.log(`DEBUG: Restored main world inventory for ${username} after death in creative dimension`);
      }
    });
  } else {
    console.log(`DEBUG: Normal respawn for ${username} (did not die in creative dimension)`);
    // Normal respawn, don't do anything special
  }
});
// Add a command to clear all saved inventories (for admin use)
ServerEvents.commandRegistry(event => {
  const { commands } = event;
  
  event.register(
    commands.literal('dimtoggle_clear')
      .requires(source => source.hasPermission(2)) // Requires op level 2
      .executes(context => {
        try {
          var player = context.source.getPlayerOrThrow();
          
          // Clear all saved inventories
          player.persistentData.remove("mainInventory");
          player.persistentData.remove("creativeInventory");
          player.persistentData.remove("mainPosX");
          player.persistentData.remove("mainPosY");
          player.persistentData.remove("mainPosZ");
          player.persistentData.remove("creativePosX");
          player.persistentData.remove("creativePosY");
          player.persistentData.remove("creativePosZ");
          player.persistentData.inCreativeDimension = false;
          
          console.log(`DEBUG: Cleared all saved dimension inventories for ${player.username}`);
          player.tell(Text.of('§aCleared all saved dimension inventories'));
          return 1;
        } catch (e) {
          console.log(`ERROR in dimtoggle_clear command: ${e}`);
          context.source.sendFailure(Text.of('§cAn error occurred while executing the command'));
          return 0;
        }
      })
  );
});

// Add a debug command
ServerEvents.commandRegistry(event => {
  const { commands } = event;
  
  event.register(
    commands.literal('dimtoggle_debug')
      .requires(source => source.hasPermission(2)) // Requires op level 2
      .executes(context => {
        try {
          var player = context.source.getPlayerOrThrow();
          
          // Print debug info
          player.tell(Text.of(`§b[Debug] §7Current dimension: ${player.level.dimension.toString()}`));
          player.tell(Text.of(`§b[Debug] §7Creative mode flag: ${player.persistentData.inCreativeDimension}`));
          
          if (player.persistentData.mainPosX) {
            player.tell(Text.of(`§b[Debug] §7Saved main world position: ${player.persistentData.mainPosX.toFixed(2)}, ${player.persistentData.mainPosY.toFixed(2)}, ${player.persistentData.mainPosZ.toFixed(2)}`));
          }
          
          if (player.persistentData.creativePosX) {
            player.tell(Text.of(`§b[Debug] §7Saved creative position: ${player.persistentData.creativePosX.toFixed(2)}, ${player.persistentData.creativePosY.toFixed(2)}, ${player.persistentData.creativePosZ.toFixed(2)}`));
          }
          
          // Check Curios
          if (hasCuriosItems(player)) {
            player.tell(Text.of(`§b[Debug] §7You have items in your Curios slots`));
          } else {
            player.tell(Text.of(`§b[Debug] §7No items in Curios slots`));
          }
          
          return 1;
        } catch (e) {
          console.log(`ERROR in dimtoggle_debug command: ${e}`);
          context.source.sendFailure(Text.of('§cAn error occurred while executing the command'));
          return 0;
        }
      })
  );
});
