ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        Item.of('create:veridium', 3),
        [Fluid.of('kubejs:malachite_solution', 360), '2x minecraft:clay_ball', Item.of('kubejs:veridium_shard')])
        .secondaryFluidInput(0).processingTime(220).heated().id('kubejs:pressurizing/veridium')
})