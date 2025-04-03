ServerEvents.recipes(event => {
    let inter = 'incomplete_lapis_lazuli_catalyst'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:lapis_lazuli_catalyst', 4).withChance(0.75),
        Item.of('kubejs:lapis_lazuli_catalyst', 3).withChance(0.25)
    ], 'minecraft:stone', [
        event.recipes.createDeploying(Item.of(inter), [Item.of(inter), 'minecraft:blue_dye']),
        event.recipes.createFilling(Item.of(inter), [Item.of(inter), Fluid.of("lava", 180)]),
        event.recipes.createCutting(Item.of(inter), Item.of(inter)),
        event.recipes.createPressing(Item.of(inter), Item.of(inter))
    ]).transitionalItem(Item.of(inter)).loops(2).id('kubejs:sequence/lapis_lazuli_catalyst')
})