ServerEvents.recipes(event => {
    let inter = 'kubejs:andesite_machine'
    let inter2 = 'create:andesite_casing'
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:andesite_machine', 2),
        Item.of('create:andesite_casing'),
        [event.recipes.createDeploying(inter2, [inter2, '#kubejs:anuggets']),
        event.recipes.createDeploying(inter2, [inter2, '#kubejs:anuggets']),
        event.recipes.createDeploying(inter2, [inter2, 'create:cogwheel']),
        event.recipes.createDeploying(inter, [inter, '#forge:saws']),
        event.recipes.createPressing(inter, inter)])
    .transitionalItem(inter2).loops(1).id('kubejs:sequence/andesite_machine')
})