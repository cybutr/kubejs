ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        [Fluid.of('tconstruct:molten_refined_obsidian', 100), Item.of('kubejs:obsidian_alloy', 1)],
        [Fluid.of('tconstruct:molten_obsidian', 600), Item.of('kubejs:sturdy_shards'), Item.of('create:powdered_obsidian'), 'kubejs:deepslate_alloy'])
        .secondaryFluidInput(0).secondaryFluidOutput(1).processingTime(300).heated().id('kubejs:pressurizing/obsidian_alloy')
})