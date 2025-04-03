ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Fluid.of('kubejs:volcanic_acid', 720),
        [Fluid.lava(360), Item.of('minecraft:blaze_powder', 2)])
    .id('kubejs:mixing/volcanic_acid')
})