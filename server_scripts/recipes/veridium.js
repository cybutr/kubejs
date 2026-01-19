ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:veridium', 4),
        [Fluid.of('kubejs:malachite_solution', 360), Item.of('minecraft:clay_ball', 2), Item.of('minecraft:deepslate', 4), Item.of('kubejs:veridium_shard')])
        .secondaryFluidInput(0).processingTime(180).heated().id('kubejs:pressurizing/veridium')
})