ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:tin_slurry', 450), [Fluid.of('kubejs:cassiterite_slurry', 720), Fluid.of('kubejs:purified_water', 180)]).heated().id('kubejs:mixing/tin_slurry')
})