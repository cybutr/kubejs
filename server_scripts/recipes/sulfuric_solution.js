ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.vacuumizing(Fluid.of('kubejs:sulfuric_solution', 300),
    [Item.of('tfmg:sulfur_dust', 1), Fluid.lava(200), Fluid.of('kubejs:glow_solution', 75)])
    .processingTime(250).secondaryFluidOutput(0).id('kubejs:vacuumizing/sulfuric_solution')
})