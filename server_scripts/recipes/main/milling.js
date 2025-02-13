ServerEvents.recipes(event => {
    event.recipes.create.milling(
        Item.of('kubejs:crushed_deepslate', 1),
        Item.of('#forge:deepslate', 1)).id('kubejs:milling/crushed_deepslate')
    event.recipes.create.milling(
        Item.of('kubejs:limestone_shard', 1),
        Item.of('create:limestone', 1)).id('kubejs:milling/limestone_shard')
    event.recipes.create.milling(
        Item.of('tfmg:limesand', 1),
        Item.of('kubejs:limestone_shard', 1)).id('kubejs:milling/limesand')
})