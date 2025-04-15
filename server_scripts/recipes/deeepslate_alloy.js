ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:deepslate_alloy')
    event.recipes.create.sequenced_assembly('kubejs:deepslate_alloy', 'create:andesite_alloy',
        [event.recipes.create.deploying(inter, [inter, 'kubejs:crushed_deepslate']),
        event.recipes.create.deploying(inter, [inter, 'kubejs:crushed_deepslate']),
        event.recipes.create.pressing(inter, inter)]).transitionalItem(inter).loops(1).id('kubejs:sequenced_assembly/deepslate_alloy')
})