ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:nitrogen', 180),
    [Fluid.of('minecraft:water', 1000), Item.of('createbb:nitrogen', 3)]).id('kubejs:mixing/nitrogen')
})