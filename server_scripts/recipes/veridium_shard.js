ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_veridium_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:veridium_shard', 2).withChance(0.90), Item.of('kubejs:veridium_shard', 1).withChance(0.10)],
    Item.of('kubejs:obsidian_alloy'),
        [
        event.recipes.createDeploying(inter, [inter, 'create:copper_nugget']),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:azurite_acid', 150)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:amethyst_shard']),
        event.recipes.createPressing(inter, inter)
        ]
    ).transitionalItem(inter).loops(2).id('kubejs:sequence/veridium_shard')
})