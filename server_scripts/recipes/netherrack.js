ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_netherrack')
    event.recipes.create.sequenced_assembly('minecraft:netherrack', 'minecraft:cobblestone',
        [event.recipes.createDeploying(inter, [inter, 'minecraft:nether_wart']),
        event.recipes.createFilling(inter, [inter, Fluid.of('sliceanddice:fertilizer', 45)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 135)])]
    ).transitionalItem(inter).loops(1).id('kubejs:sequence/netherrack')
})