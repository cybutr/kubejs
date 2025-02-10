ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:deepslate_alloy')
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:deepslate_alloy'),
        Item.of('create:andesite_alloy'),
        [event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, Item.of('kubejs:crushed_deepslate')]),
        event.recipes.createDeploying(inter, [inter, Item.of('kubejs:crushed_deepslate')])])
        .transitionalItem(inter).loops(1).id('kubejs:sequence/deepslate_alloy')
})