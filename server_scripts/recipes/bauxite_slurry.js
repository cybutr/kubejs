ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Fluid.of('kubejs:bauxite_slurry', 810),
        [Item.of('kubejs:bauxite_shard', 2), Fluid.of('kubejs:caustic_solution', 180), Fluid.water(180)]
    ).heated().id('kubejs:mixing/bauxite_slurry')
})