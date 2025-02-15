ServerEvents.recipes(event => {
    let inter = 'kubejs:steel_machine'
    let inter2 = 'tfmg:heavy_machinery_casing'
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:steel_machine', 1),
        Item.of('tfmg:heavy_machinery_casing', 1),
        [event.recipes.createDeploying(inter2, [inter2, 'tfmg:steel_mechanism']),
        event.recipes.createDeploying(inter2, [inter2, 'create:electron_tube']),
        event.recipes.createFilling(inter2, [inter2, Fluid.of('tfmg:molten_slag', 40)]),
        event.recipes.createDeploying(inter, [inter, 'tfmg:turbine_blade']),
        event.recipes.createDeploying(inter, [inter, '#forge:screwdrivers'])])
    .transitionalItem(inter2).loops(1).id('kubejs:sequence/steel_machine')
})