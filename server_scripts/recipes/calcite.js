ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing("minecraft:calcite", [ "kubejs:calcite_catalyst", Fluid.water(990)]).heated()
})