ServerEvents.recipes(event => {
    event.recipes.tfmg.distillation(Fluid.of("minecraft:water", 1000),
    [Fluid.of("minecraft:water", 865), Fluid.of("kubejs:purified_water", 135)]).id("kubejs:distillation/purified_water")

    event.recipes.vintageimprovements.vacuumizing([Fluid.water(135), Fluid.of("kubejs:purified_water", 15)], Fluid.water(120)).processingTime(90).id("kubejs:vacuumizing/purified_water")
})