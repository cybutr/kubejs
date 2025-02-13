PlayerEvents.tick(e => {
    if(e.player.age % 20) return;
    if(e.player.mainHandItem.id != 'kubejs:fortrens') return;
    e.player.potionEffects.add('kubejs:erection', 20, 2, true, false);
})