ServerEvents.recipes(event => {
    event.recipes.createFilling(
        Item.of('minecraft:glowstone_dust', 1),
        [Fluid.of('kubejs:glow_solution', 250),
        'minecraft:redstone'])
    .id('kubejs:filling/glowstone_dust')
})