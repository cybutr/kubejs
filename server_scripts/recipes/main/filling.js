ServerEvents.recipes(event => {
    event.recipes.createFilling('create:brass_casing', ['#forge:stripped_logs', Fluid.of('tconstruct:molten_brass', 90)]).id('kubejs:filling/brass_casing')
    event.recipes.createFilling('minecraft:glowstone_dust',[Fluid.of('kubejs:glow_solution', 250), Item.of('minecraft:redstone')]).id('kubejs:filling/glowstone_dust')
    event.recipes.createFilling('create:rose_quartz',[Fluid.of('kubejs:molten_redstone', 630), Item.of('minecraft:quartz')]).id('kubejs:filling/rose_quartz')
    event.recipes.createFilling('kubejs:cum_bottle', [Fluid.of('kubejs:cum', 250), 'minecraft:glass_bottle']).id('kubejs:filling/cum_bottle')
    event.recipes.createFilling(Item.of('kubejs:fortrens', 2), [Fluid.of('tfmg:liquid_plastic', 750), Item.of('tfmg:thermite_grenade', 1)]).id('kubejs:filling/dildo')
    event.recipes.createFilling('createaddition:diamond_grit_sandpaper', [Fluid.of('tconstruct:molten_diamond', 750), 'create:sand_paper']).id('kubejs:filling/diamond_grit_sandpaper')
})