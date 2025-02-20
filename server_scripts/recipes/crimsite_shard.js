ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_crimsite_shard')
    event.recipes.create.sequenced_assembly([Item.of('kubejs:crimsite_shard', 3).withChance(0.80), Item.of('kubejs:crimsite_shard', 2).withChance(0.20)],
    Item.of('kubejs:obsidian_alloy'),
        [
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:molten_redstone', 120)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:iron_nugget']),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
        event.recipes.createPressing(inter, inter)
        ]
    ).transitionalItem(inter).loops(1).id('kubejs:sequence/crimsite_shard')
})