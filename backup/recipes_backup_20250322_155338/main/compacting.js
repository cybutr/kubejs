ServerEvents.recipes(event => {
    event.recipes.create.compacting(Item.of('minecraft:dirt', 2), [Fluid.of('sliceanddice:fertilizer', 120), '3x #forge:seeds', '2x #minecraft:saplings']).id('kubejs:compacting/dirt')
    event.recipes.create.compacting(Item.of('minecraft:ink_sac', 1), [Fluid.of('create_enchantment_industry:ink', 275)]).id('kubejs:compacting/ink_sac')
})