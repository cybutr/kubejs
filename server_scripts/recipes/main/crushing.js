ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [Item.of('kubejs:crushed_deepslate', 1), Item.of('kubejs:crushed_deepslate').withChance(0.5)],
        Item.of('#forge:deepslate', 1))
        .processingTime(200).id('kubejs:crushing/crushed_deepslate')
    event.recipes.create.crushing([Item.of('kubejs:limestone_shard', 1), Item.of('kubejs:limestone_shard').withChance(0.5)], Item.of('create:limestone', 1))
        .processingTime(100).id('kubejs:crushing/limestone_shard')
    event.recipes.create.crushing([Item.of('tfmg:limesand', 1), Item.of('tfmg:limesand').withChance(0.5)], Item.of('kubejs:limestone_shard', 1)).processingTime(100).id('kubejs:crushing/limesand')
})