ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:asurine', 1),
        [Fluid.of('kubejs:nitrogen', 270), Fluid.of('tconstruct:molten_zinc', 45), Item.of('minecraft:stone')])
        .secondaryFluidInput(0).processingTime(90).id('kubejs:pressurizing/asurine')
})