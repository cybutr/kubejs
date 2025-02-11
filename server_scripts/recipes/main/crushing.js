ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [Item.of('kubejs:crushed_deepslate', 1), Item.of('kubejs:crushed_deepslate').withChance(0.5)],
        Item.of('#forge:deepslate', 1))
        .processingTime(200).id('kubejs:crushing/crushed_deepslate')
})