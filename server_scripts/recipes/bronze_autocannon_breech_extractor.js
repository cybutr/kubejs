ServerEvents.recipes(event => {
    let inter = Item.of('createbigcannons:partial_bronze_autocannon_breech_extractor')
    event.recipes.create.sequenced_assembly('createbigcannons:bronze_autocannon_breech_extractor', '#forge:ingots/strong_bronze',
        [event.recipes.create.cutting(inter, inter)]).transitionalItem(inter).loops(3).id('kubejs:sequenced_assembly/bronze_autocannon_breech_extractor')
})