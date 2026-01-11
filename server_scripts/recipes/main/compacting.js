ServerEvents.recipes(event => {
    event.recipes.create.compacting(Item.of('minecraft:dirt', 2), [Fluid.of('sliceanddice:fertilizer', 135), '3x #forge:seeds', '2x #minecraft:saplings']).id('kubejs:compacting/dirt')
    event.recipes.create.compacting(Item.of('northstar:martian_steel', 1), [Item.of('tfmg:steel_ingot', 2), Item.of('northstar:volcanic_ash')]).heated().id('kubejs:compacting/martian_steel_ingot')
})