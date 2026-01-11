ServerEvents.recipes(event => {
    event.shaped('2x kubejs:andesite_upgrade_smithing_template',
        [' N ',
        ' S ',
        ' N '],
        {
            'S': 'create_dd:andesite_sheet',
            'N': '#kubejs:anuggets'
        }).id('kubejs:shaped/andesite_upgrade_smithing_template')
    let inter = Item.of('create_dd:andesite_sheet')
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:andesite_upgrade_smithing_template', 4),
        Item.of('create_dd:andesite_sheet'),
        [event.recipes.createDeploying(inter, [inter, '#kubejs:anuggets']),
        event.recipes.createPressing(inter, inter)])
        .transitionalItem(inter).loops(1).id('kubejs:sequence/andesite_upgrade_smithing_template')
    event.shaped('2x kubejs:copper_upgrade_smithing_template',
        [' N ',
        ' S ',
        ' N '],
        {
            'S': 'create:copper_sheet',
            'N': 'create:copper_nugget'
        }).id('kubejs:shaped/copper_upgrade_smithing_template')
    inter = Item.of('create:copper_sheet')
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:copper_upgrade_smithing_template', 4),
        Item.of('create:copper_sheet'),
        [event.recipes.createDeploying(inter, [inter, 'create:copper_nugget']),
        event.recipes.createPressing(inter, inter)])
        .transitionalItem(inter).loops(1).id('kubejs:sequence/copper_upgrade_smithing_template')
    inter = Item.of('create:brass_sheet')
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:brass_upgrade_smithing_template', 4),
        Item.of('create:brass_sheet'),
        [event.recipes.createFilling(inter, [inter, Fluid.of('tconstruct:molten_brass', 90)]),
        event.recipes.createPressing(inter, inter)])
        .transitionalItem(inter).loops(1).id('kubejs:sequence/brass_upgrade_smithing_template')
})