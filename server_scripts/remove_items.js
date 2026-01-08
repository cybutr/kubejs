let bannedItems = [
  'minecraft:elytra'
]

PlayerEvents.inventoryChanged(event => {
  let player = event.player;
  if (!bannedItems.includes(event.item.id)) return;

  player.tell([
    "Item ",
    Text.yellow(event.item.id),
    " has been ",
    Text.red("removed"),
    "."
  ]);

  player.inventory.items.forEach((item, index) => {
    if (item.id === event.item.id) {
      item.count = 0;
    }
  });
});

ServerEvents.recipes(event => {
  bannedItems.forEach(item => {
    event.remove({ output: item })
  })
});

// List of dimensions where block placement should be restricted
const RESTRICTED_DIMENSIONS = [
  'create_dd:ponder'
];

// List of blocks that cannot be placed in restricted dimensions
const RESTRICTED_BLOCKS = [
  'minecraft:end_portal_frame',
];

// Optional: List of players that are exempt from restrictions (e.g., admins)
const EXEMPT_PLAYERS = [
  'ocllyn'
];

// Add the numismatics blocks to the restricted blocks list
RESTRICTED_BLOCKS.push(
  'numismatics:andesite_depositor',
  'numismatics:brass_depositor',
  'numismatics:bank_terminal',
  'numismatics:vendor',
  'numismatics:creative_vendor',
  'numismatics:blaze_banker',
  'minecraft:ender_chest',
);

const RESTRICTED_ITEMS = [
  'numismatics:banking_guide',
  'alexsmobs:dimensional_carver',
  'alexsmobs:shattered_dimensional_carver',
]

// Handle placed events for all restricted blocks
BlockEvents.placed(RESTRICTED_BLOCKS, event => {
  try {
    if (RESTRICTED_DIMENSIONS.includes(event.player.level.dimension.toString())) {
      event.block.set('minecraft:air');
      event.player.tell("You cannot place this block in this dimension.");
    }
  }
  catch (error) {
    // Handle the error gracefully
    console.error(`Error in BlockEvents.placed: ${error}`);
    event.player.tell("An error occurred while processing the block placement.");
  }
});
BlockEvents.rightClicked('minecraft:ender_chest', event => { 
  try {
      if (event.player.level.dimension.toString() === 'create_dd:ponder') {
    event.cancel();
    event.player.tell("You cannot use this in this dimension.");
  }
  }
  catch (error) {
    // Handle the error gracefully
    console.error(`Error in BlockEvents.rightClicked: ${error}`);
    event.player.tell("Dont :(");
  }
}
);
// Handle placed events for all restricted blocks
ItemEvents.rightClicked(RESTRICTED_ITEMS, event => {
  try {
    if (RESTRICTED_DIMENSIONS.includes(event.player.level.dimension.toString())) {
      return event.cancel();
    }
  }
  catch (error) {
    // Handle the error gracefully
    console.error(`Error in ItemEvents.rightClicked: ${error}`);
    event.player.tell("Dont use this D:");
  }
});

// File: server_scripts/kill_void_portals.js

// Counter to track ticks
let tickCounter = 0;

// Run this function every server tick
ServerEvents.tick(event => {
  // Increment the counter
  tickCounter++;
  
  // Check if it's time to run the command (every 3 ticks)
  if (tickCounter >= 3) {
    // Reset the counter
    tickCounter = 0;
    
    // Run the command to kill void portals
    event.server.runCommandSilent('kill @e[type=alexsmobs:void_portal]');
    
    // Optional: Log to console (uncomment if you want logging)
    // console.log('Killed void portals');
  }
});

// Log when the script is loaded
console.log('Void portal removal script loaded - will kill void portals every 3 ticks');

