ServerEvents.recipes(event => {
    let bhinter = Item.of('kubejs:drill_head')
    event.recipes.create.sequenced_assembly('create_sa:brass_drill_head', 'kubejs:drill_head',
        [event.recipes.create.deploying(bhinter, [bhinter, 'create:brass_sheet']),
        event.recipes.create.filling(bhinter, [bhinter, Fluid.of('tconstruct:molten_brass', 550)])]).transitionalItem(bhinter).loops(1).id('kubejs:sequenced_assembly/brass_drill_head')
    let peinter = Item.of('minecraft:redstone_block')
    event.recipes.create.sequenced_assembly('advancedperipherals:peripheral_casing', 'minecraft:redstone_block',
        [event.recipes.create.filling(peinter, [peinter, Fluid.of('tconstruct:molten_copper', 450)]), 
        event.recipes.create.filling(peinter, [peinter, Fluid.of('tconstruct:molten_steel', 250)]),
        event.recipes.create.deploying(peinter, [peinter, Item.of('create_dd:calculation_mechanism')]),
        event.recipes.create.pressing(peinter, peinter)]).transitionalItem(peinter).loops(1).id('kubejs:sequenced_assembly/peripheral_casing')
    let aminter = Item.of('minecraft:medium_amethyst_bud')
    event.recipes.create.sequenced_assembly('minecraft:amethyst_cluster', 'minecraft:amethyst_shard',
        [event.recipes.create.filling(aminter, [aminter, Fluid.of('sliceanddice:fertilizer', 90)]),
        event.recipes.create.filling(aminter, [aminter, Fluid.water(350)]),
        event.recipes.create.deploying(aminter, [aminter, 'minecraft:amethyst_shard'])]).transitionalItem(aminter).loops(3).id('kubejs:sequenced_assembly/amethyst_cluster')
})