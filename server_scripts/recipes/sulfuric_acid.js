ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Fluid.of('tfmg:sulfuric_acid', 1000),
        [Fluid.water(1000), Item.of('tfmg:nitrate_dust'), Fluid.of('vintageimprovements:sulfur_trioxide', 1000)])
        .secondaryFluidInput(0).secondaryFluidOutput(1).processingTime(270).heated().id('kubejs:pressurizing/sulfuric_acid')
})