ServerEvents.recipes(event => {
    event.recipes.create.compacting(Item.of('minecraft:dirt', 2), [Fluid.of('sliceanddice:fertilizer', 135), '3x #forge:seeds', '2x #minecraft:saplings']).id('kubejs:compacting/dirt')
})