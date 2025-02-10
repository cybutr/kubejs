ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [Item.of('kubejs:sturdy_shards', 2), Item.of('kubejs:sturdy_shards').withChance(0.5)],
        Item.of('create:sturdy_sheet')
    ).processingTime(200).id('kubejs:crushing/sturdy_shard')
})