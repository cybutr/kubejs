ServerEvents.recipes(event => {
    let inter = Item.of('create:brass_sheet')
    event.recipes.create.sequenced_assembly('create_dd:integrated_mechanism', 'create:brass_sheet',
        [event.recipes.create.deploying(inter, [inter, 'create_dd:integrated_circuit']),
        event.recipes.create.deploying(inter, [inter, 'create:electron_tube']),
        event.recipes.create.deploying(inter, [inter, 'create:cogwheel']),
        event.recipes.create.deploying(inter, [inter, '#forge:screwdrivers'])]).transitionalItem(inter).loops(1).id('kubejs:sequenced_assembly/integrated_mechanism')
})