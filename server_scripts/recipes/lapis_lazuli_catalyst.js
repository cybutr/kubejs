ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_lapis_lazuli_catalyst')
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:lapis_lazuli_catalyst', 4).withChance(0.75),
        Item.of('kubejs:lapis_lazuli_catalyst', 3).withChance(0.25)
    ], 'minecraft:stone', [
        event.recipes.createDeploying(inter, [inter, 'minecraft:blue_dye']),
        event.recipes.createFilling(inter, [inter, Fluid.lava(180)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(2).id('kubejs:sequence/lapis_lazuli_catalyst')
})