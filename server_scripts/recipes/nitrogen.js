ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:nitrogen', 180),
    [Fluid.of('minecraft:water', 990), Fluid.of('tfmg:cooling_fluid', 270)]).id('kubejs:mixing/nitrogen')
})