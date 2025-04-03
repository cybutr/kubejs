ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_ochrum_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:ochrum_shard', 3).withChance(0.75), Item.of('kubejs:ochrum_shard', 2).withChance(0.20), Item.of('minecraft:yellow_dye', 1).withChance(0.05)],
    Item.of('kubejs:obsidian_alloy'),
        [event.recipes.createDeploying(inter, [inter, Item.of('minecraft:gold_nugget')]),
        event.recipes.createFilling(inter, [inter, Fluid.of('tfmg:molten_slag', 50)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:gold_solution', 150)]),
        event.recipes.createFilling(inter, [inter, Fluid.lava(250)])]
    ).transitionalItem(inter).loops(1).id('kubejs:sequence/ochrum_shard')
})