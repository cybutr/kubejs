ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_bauxite_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:bauxite_shard', 3).withChance(0.80), Item.of('kubejs:bauxite_shard', 5).withChance(0.20)],
    Item.of('kubejs:obsidian_alloy'),
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:caustic_solution', 135)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createFilling(inter, [inter, Fluid.of('sliceanddice:fertilizer', 90)])]).transitionalItem(inter).loops(1).id('kubejs:sequence/bauxite_shard')
})