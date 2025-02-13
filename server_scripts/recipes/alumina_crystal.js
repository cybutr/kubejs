ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_alumina_crystal')
    event.recipes.create.sequenced_assembly('kubejs:alumina_crystal', 'minecraft:quartz',
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:crystalline_acid', 125)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:glow_solution', 75)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('sliceanddice:fertilizer', 100)])]).transitionalItem(inter).loops(2).id('kubejs:sequence/alumina_shard')
})