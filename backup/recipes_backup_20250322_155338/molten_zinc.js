ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Fluid.of('tconstruct:molten_zinc', 350),
        [Fluid.of('kubejs:purified_water', 850), Item.of('kubejs:asurine_shard'), Fluid.lava(200)])
        .secondaryFluidInput(0).processingTime(400).heated().id('kubejs:pressurizing/molten_zinc')
})