BlockEvents.rightClicked('campfire', event => {
    if (event.hand != 'main_hand' || !event.item.empty) return
    let { player, level } = event

    // Basically just create an invisible entity and let player ride on it
    if (player.vehicle == null) {
        let display = level.createEntity('minecraft:item_display')
        display.setPos(player.x, player.y - 0.2, player.z)
        player.startRiding(display)
        display.spawn()
    }
})

EntityEvents.spawned('item_display', event => {
    event.server.scheduleInTicks(0, () => {
        if(!event.entity.passengers.isEmpty()) return;
        event.cancel()
    })
})