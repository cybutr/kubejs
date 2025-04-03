ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_sulfuric_crystal')
    event.recipes.create.sequenced_assembly(
        [Item.of('kubejs:sulfuric_crystal', 2).withChance(0.90), Item.of('kubejs:sulfuric_crystal', 1).withChance(0.10)],
        Item.of('kubejs:obsidian_alloy'),
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:volcanic_acid', 180)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:sulfuric_solution', 270)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
        event.recipes.createPressing(inter, inter)])
    .transitionalItem(inter).loops(1).id('kubejs:sequence/sulfuric_crystal')
})