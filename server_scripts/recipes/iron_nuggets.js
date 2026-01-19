ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        [Fluid.of('create:honey', 250), Item.of('minecraft:iron_nugget', 8)],
        [Fluid.of('createbb:phenylacetic_acid', 50), Item.of('tconstruct:pig_iron_ingot'), Item.of('kubejs:calcite_catalyst')]
    )
    .secondaryFluidInput(0)
    .secondaryFluidOutput(1)
    .processingTime(200)
    .heated()
    .id('kubejs:pressurizing/iron_nuggets')
})