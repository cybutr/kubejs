ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_alumina_crystal')
    event.recipes.create.sequenced_assembly('kubejs:alumina_crystal', 'minecraft:quartz',
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:crystalline_acid', 135)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:glow_solution', 90)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('sliceanddice:fertilizer', 90)])]).transitionalItem(inter).loops(2).id('kubejs:sequence/alumina_shard')
})