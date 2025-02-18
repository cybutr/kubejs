// priority: 1000

ServerEvents.recipes((e) => {
    const server = Utils.getServer()
    global.WORLD_SEED =
        server === null ? -1 : server.worldData.worldGenOptions().seed()
    })

    ServerEvents.loaded((e) => {
    if (global.WORLD_SEED === -1) {
        e.server.runCommandSilent('reload')
    }
})