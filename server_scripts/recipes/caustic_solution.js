ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:caustic_solution', 375),
    [Fluid.water(250), Fluid.of('kubejs:molten_redstone', 125), 'minecraft:blaze_powder']).id('kubejs:mixing/caustic_solution')
})