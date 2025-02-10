ServerEvents.recipes(event => {
    event.recipes.tfmg.distillation(Fluid.of("minecraft:water", 1000),
    [Fluid.of("minecraft:water", 875), Fluid.of("kubejs:purified_water", 125)]).id("kubejs:distillation/purified_water")

    //alt
    event.recipes.vintageimprovements.vacuumizing([Fluid.water(145), Fluid.of("kubejs:purified_water", 15)], Fluid.of("minecraft:water", 150)).processingTime(120).id("kubejs:vacuumizing/purified_water")
})