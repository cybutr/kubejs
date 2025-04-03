ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:brass_machine')
    let inter2 = Item.of('kubejs:andesite_machine')
    event.recipes.create.sequenced_assembly('kubejs:brass_machine', 'kubejs:andesite_machine',
        [event.recipes.createFilling(inter2, [inter2, Fluid.of('tconstruct:molten_brass', 350)]),
        event.recipes.createDeploying(inter2, [inter2, 'vintageimprovements:small_brass_spring']),
        event.recipes.createDeploying(inter2, [inter2, 'create_dd:integrated_mechanism']),
        event.recipes.createDeploying(inter2, [inter, 'create:wrench'])]).transitionalItem(inter).loops(1).id('kubejs:sequenced_assembly/brass_machine')
})