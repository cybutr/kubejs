ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:caustic_solution', 360),
    [Fluid.water(270), Fluid.of('kubejs:molten_redstone', 135), 'minecraft:blaze_powder']).id('kubejs:mixing/caustic_solution')
})