ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_bauxite')
    event.recipes.create.sequenced_assembly(Item.of('tfmg:bauxite', 1), 'kubejs:alumina_crystal',
        [event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:bauxite_slurry', 90)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:redstone'])]).transitionalItem(inter).loops(3).id('kubejs:sequence/bauxite')
})