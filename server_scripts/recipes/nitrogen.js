ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:nitrogen', 200),
    [Fluid.of('minecraft:water', 1000)]).heatLevel('COOLED').id('kubejs:mixing/nitrogen')
})