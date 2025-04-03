ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.vacuumizing([Fluid.of('kubejs:sulfuric_solution', 270)],
    [Item.of('tfmg:sulfur_dust', 1), Fluid.lava(180), Fluid.of('kubejs:glow_solution', 90)])
    .processingTime(270).secondaryFluidOutput(0).id('kubejs:vacuumizing/sulfuric_solution')
})