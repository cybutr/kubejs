PlayerEvents.tick(e => {
    const { player } = e;

    // Reset logic if effect is not active
    if (!player.potionEffects.isActive('kubejs:blood_loss')) {
        player.modifyAttribute("minecraft:generic.max_health", //Select max_health attribute
            "bf435515-2a7b-4790-a937-bfbd843db62b", //Identifier (UUID)
            0 //reset
            ,"addition") //Operation

        //Update player health
        player.setHealth(player.getHealth())
        return;
    }
    else{

        let amplifier = player.getEffect('kubejs:blood_loss').getAmplifier();
        player.modifyAttribute("minecraft:generic.max_health", //Select max_health attribute
            "bf435515-2a7b-4790-a937-bfbd843db62b", //Identifier (UUID)
            -hpModifierCalc(player,amplifier) //Modify attribute to be at least 1 hp
            ,"addition") //Operation
    
        //Update player health
        player.setHealth(Math.min(player.getHealth(),player.getMaxHealth()))
    }

});

//Function to calculate how much hp a player should have when the effect is active
function hpModifierCalc(player,amplifier){
    return Math.min(1+amplifier*2,player.getAttributeBaseValue("minecraft:generic.max_health")-1)
}
PlayerEvents.tick(e => {
    if(e.player.age % 20) return;
    if(e.player.mainHandItem.id != 'kubejs:fortrens') return;
    e.player.potionEffects.add('kubejs:erection', 20, 2, true, false);
})

/* let $ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer");
let $PlayerWakeUpEvent = Java.loadClass("net.forge.forge.event.entity.player.PlayerWakeUpEvent");

ForgeEvents.onEvent($PlayerWakeUpEvent, event => {
    let player = event.entity;

    if (player instanceof $ServerPlayer && !event.updateLevel()) {
        player.potionEffects.add('minecraft:speed', 12000, 0, false, true)
    }
}) */