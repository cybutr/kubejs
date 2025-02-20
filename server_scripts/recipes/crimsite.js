ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Item.of('create:crimsite', 4),
    [Fluid.of('kubejs:purified_water', 450), Item.of('minecraft:stone', 4), Item.of('minecraft:clay_ball', 2), Item.of('kubejs:crimsite_shard', 1)]).id('kubejs:mixing/crimsite')
})