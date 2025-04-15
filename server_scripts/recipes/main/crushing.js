ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [Item.of('kubejs:crushed_deepslate', 1), Item.of('kubejs:crushed_deepslate').withChance(0.5)],
        Item.of('#kubejs:deepslate', 1))
        .processingTime(180).id('kubejs:crushing/crushed_deepslate')
    event.recipes.create.crushing([Item.of('kubejs:limestone_shard', 1), Item.of('kubejs:limestone_shard').withChance(0.5)], '#kubejs:limestones')
        .processingTime(90).id('kubejs:crushing/limestone_shard')
    event.recipes.create.crushing([Item.of('tfmg:limesand', 1), Item.of('tfmg:limesand').withChance(0.5)], Item.of('kubejs:limestone_shard', 1)).processingTime(45).id('kubejs:crushing/limesand')
    event.recipes.create.crushing([Item.of('tfmg:sulfur_dust', 1), Item.of('tfmg:sulfur_dust').withChance(0.5)], Item.of('vintageimprovements:sulfur', 1)).processingTime(90).id('kubejs:crushing/sulfur_dust')
})