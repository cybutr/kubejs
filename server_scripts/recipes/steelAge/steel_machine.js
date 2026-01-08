ServerEvents.recipes(event => {
    let inter = 'kubejs:brass_machine'
    let inter2 = 'kubejs:incomplete_steel_machine'
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:steel_machine', 1),
        Item.of('kubejs:brass_machine', 1),
        [event.recipes.createDeploying(inter2, [inter2, 'tfmg:steel_mechanism']),
        event.recipes.createDeploying(inter2, [inter2, 'create:electron_tube']),
        event.recipes.createFilling(inter2, [inter2, Fluid.of('tfmg:molten_slag', 45)]),
        event.recipes.createDeploying(inter, [inter, 'tfmg:turbine_blade']),
        event.recipes.createDeploying(inter, [inter, '#forge:screwdrivers'])])
    .transitionalItem(inter2).loops(1).id('kubejs:sequence/steel_machine')
})