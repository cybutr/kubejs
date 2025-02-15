ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:nitrogen', 200),
    [Fluid.of('minecraft:water', 1000), Fluid.of('tfmg:cooling_fluid', 250)]).id('kubejs:mixing/nitrogen')
})