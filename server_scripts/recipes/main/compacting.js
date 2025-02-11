ServerEvents.recipes(event => {
    event.recipes.create.compacting( 'minecraft:dirt', [Item.of('#forge:seeds', 3), Item.of('#minecraft:saplings', 2), Fluid.of('slideanddice:liquid_fertilizer', 120)]).id('kubejs:compacting/dirt')
})