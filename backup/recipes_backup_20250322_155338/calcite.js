ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing("minecraft:calcite", [ "kubejs:calcite_catalyst", Fluid.water(1000)]).heated()
})