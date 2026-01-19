/* ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:asurine', 1),
        [Fluid.of('kubejs:nitrogen', 270), Fluid.of('tconstruct:molten_zinc', 45), Item.of('minecraft:stone')])
        .secondaryFluidInput(0).processingTime(90).id('kubejs:pressurizing/asurine')
}) */
ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:asurine', 4),
        [Fluid.of('kubejs:purified_water', 180), Item.of('minecraft:clay_ball', 2), Item.of('minecraft:dee pslate', 4), Item.of('kubejs:asurine_shard')])
        .secondaryFluidInput(0).processingTime(180).heated().id('kubejs:pressurizing/asurine')
})