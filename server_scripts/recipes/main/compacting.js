ServerEvents.recipes(event => {
    event.recipes.create.compacting(Item.of('minecraft:dirt', 2), [Fluid.of('sliceanddice:fertilizer', 120), '3x #forge:seeds', '2x #minecraft:saplings']).id('kubejs:compacting/dirt')
    event.recipes.create.compacting([Fluid.of('kubejs:cum', 150), Fluid.of('kubejs:skibidi_fluid', 300)], 'kubejs:fortrens').id('kubejs:cum')
    event.recipes.create.compacting(Item.of('kubejs:fortrens', 2), [Fluid.of('tfmg:liquid_plastic', 750), Item.of('tfmg:thermite_grenade', 1)]).id('kubejs:compacting/dildo')
    event.recipes.create.compacting(Item.of('minecraft:ink_sac', 1), [Fluid.of('create_enchantment_industry:ink', 275)]).id('kubejs:compacting/ink_sac')
})