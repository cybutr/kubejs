ServerEvents.recipes(event => {
    event.recipes.create.mixing('2x create_dd:tin_ingot', [Fluid.of('kubejs:tin_slurry', 180), Fluid.of('kubejs:nitrogen', 90)]).id('kubejs:mixing/tin_ingot')
})