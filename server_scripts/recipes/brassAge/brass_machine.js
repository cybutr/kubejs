ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:andesite_machine')
    let inter2 = Item.of('kubejs:incomplete_brass_machine')
    event.recipes.create.sequenced_assembly('kubejs:brass_machine', 'kubejs:andesite_machine',
        [event.recipes.createDeploying(inter2, [inter2, 'vintageimprovements:small_brass_spring']),
        event.recipes.createDeploying(inter2, [inter2, 'create_dd:integrated_mechanism']),
        event.recipes.createDeploying(inter2, [inter2, '#forge:screwdrivers']),
        event.recipes.createFilling(inter2, [inter2, Fluid.of('tconstruct:molten_brass', 360)])]).transitionalItem(inter2).loops(1).id('kubejs:sequenced_assembly/brass_machine')
})