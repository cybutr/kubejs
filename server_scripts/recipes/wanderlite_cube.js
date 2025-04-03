ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('vs_clockwork:wanderlite_cube'),
    [Item.of('alexsmobs:capsid'), Item.of('vs_clockwork:wanderlite_crystal'), Fluid.of('kubejs:enriched_water', 360)]).id('kubejs:pressurizing/wanderlite_cube')
    let inter = Item.of('vs_clockwork:wanderlite_matrix')
    event.recipes.create.sequenced_assembly(
        'vs_clockwork:wanderlite_matrix',
        'vs_clockwork:wanderlite_cube',
        [
            event.recipes.createDeploying(inter, [inter, Item.of('create_dd:chromatic_compound')]),
            event.recipes.vintageimprovements.vibrating(inter, inter),
            event.recipes.createPressing(inter, inter)
        ]
    ).transitionalItem(inter).loops(1).id('kubejs:sequence/wanderlite_matrix')
})