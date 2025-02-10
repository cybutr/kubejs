ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_asurine_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:asurine_shard', 3).withChance(0.75), Item.of('kubejs:asurine_shard', 2).withChance(0.20), Item.of('minecraft:light_blue_dye', 1).withChance(0.05)],
    Item.of('kubejs:obsidian_alloy'),
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:crystalline_acid', 150)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:zinc_solution', 250)]),
        event.recipes.createPressing(inter, inter)]
    ).transitionalItem(inter).loops(1).id('kubejs:sequence/asurine_shard')
})