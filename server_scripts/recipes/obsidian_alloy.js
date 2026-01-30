ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(
        [Fluid.of('tconstruct:molten_refined_obsidian', 90), Item.of('kubejs:obsidian_alloy', 4)],
        [Fluid.of('tconstruct:molten_obsidian', 630), Item.of('kubejs:sturdy_shards'), Item.of('create:powdered_obsidian'), Item.of('kubejs:deepslate_alloy', 2)])
        .secondaryFluidInput(0).secondaryFluidOutput(1).processingTime(270).heated().id('kubejs:pressurizing/obsidian_alloy')
})