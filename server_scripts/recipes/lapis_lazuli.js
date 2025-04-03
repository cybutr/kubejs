ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:lapis_lazuli_catalyst')
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lapis_lazuli', 2).withChance(0.95),
        Item.of('minecraft:blue_dye', 2).withChance(0.05)
    ], Item.of('kubejs:lapis_lazuli_catalyst'), [
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
        event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:water', 360)]),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1).id('kubejs:sequence/lapis_lazuli')
})