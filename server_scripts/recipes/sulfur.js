ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('vintageimprovements:sulfur'),
    [Fluid.of('kubejs:purified_water', 90), Item.of('kubejs:sulfuric_crystal'), Fluid.lava(180)]).secondaryFluidInput(0).processingTime(360).id('kubejs:pressurizing/sulfur')
})