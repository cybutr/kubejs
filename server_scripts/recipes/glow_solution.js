ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:glow_solution', 360),
    [Fluid.of('create:honey', 135), Item.of('minecraft:glow_berries', 3)]).heated().id('kubejs:mixing/glow_solution')
})