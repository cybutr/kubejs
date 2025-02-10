ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Item.of('create:ochrum', 4),
    [Fluid.of('kubejs:enriched_water', 450), Item.of('minecraft:stone', 4), Item.of('kubejs:ochrum_shard', 1)]).id('kubejs:mixing/ochrum')
})