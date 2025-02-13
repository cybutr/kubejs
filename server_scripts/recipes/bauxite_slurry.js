ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Fluid.of('kubejs:bauxite_slurry', 850),
        [Item.of('kubejs:bauxite_shard', 2), Fluid.of('kubejs:caustic_solution', 175), Fluid.water(200)]
    ).heated().id('kubejs:mixing/bauxite_slurry')
})