ServerEvents.recipes(event => {
    let inter2 = Item.of('kubejs:incomplete_electrum_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:electrum_shard', 2).withChance(0.85), Item.of('kubejs:electrum_shard', 1).withChance(0.15)],
        Item.of('create:brass_nugget'),
        [event.recipes.createFilling(inter2, [inter2, Fluid.of('kubejs:gold_solution', 90)]),
        event.recipes.createFilling(inter2, [inter2, Fluid.of('kubejs:malachite_solution', 90)]),
        event.recipes.vintageimprovements.vibrating(inter2, inter2)]
    ).transitionalItem(inter2).loops(2).id('kubejs:sequence/electrum_shard')

    event.recipes.create.sandpaper_polishing('createaddition:electrum_ingot', 'kubejs:electrum_shard').id('kubejs:electrum_ingot_polishing')
})