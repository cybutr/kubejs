ServerEvents.recipes(event => {
    let inter = Item.of('minecraft:glass_bottle')
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:empty_tube', 2),
        Item.of('minecraft:glass_bottle'),
        [event.recipes.createFilling(inter, [inter, Fluid.of('tconstruct:molten_iron', 180)]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createPressing(inter, inter)])
        .transitionalItem(inter).loops(1).id('kubejs:sequence/empty_tube')
})