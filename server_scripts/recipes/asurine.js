ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:asurine', 1),
        [Fluid.of('kubejs:nitrogen', 300), Fluid.of('tconstruct:molten_zinc', 40), Item.of('minecraft:stone')])
        .secondaryFluidInput(0).processingTime(100).id('kubejs:pressurizing/asurine')
})