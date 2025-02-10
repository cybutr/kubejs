ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:limestone_shard')
    event.recipes.create.sequenced_assembly(Item.of('kubejs:calcite_catalyst'), Item.of('kubejs:limestone_shard'),
        [event.recipes.createPressing(inter, inter),
        event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:liquid_garnish', 200)]),
        event.recipes.createFilling(inter, [inter, Fluid.water(180)])]
    ).transitionalItem(inter).loops(2).id('kubejs:sequence/calcite_catalyst')
})