ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('vintageimprovements:sulfur'),
    [Fluid.of('kubejs:purified_water', 80), Item.of('kubejs:sulfuric_crystal'), Fluid.lava(200)]).secondaryFluidInput(0).processingTime(320).id('kubejs:pressurizing/sulfur')
})