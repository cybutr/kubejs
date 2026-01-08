ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:copper_machine')
    let inter2 = Item.of('kubejs:incomplete_blazing_machine')
    event.recipes.create.sequenced_assembly("kubejs:blazing_machine", "kubejs:copper_machine",
        [event.recipes.createFilling(inter2, [inter2, Fluid.of("tconstruct:flowing_seared_stone", 750)]),
         event.recipes.createFilling(inter2, [inter2, Fluid.of("tconstruct:molten_rose_gold", 360)]),
         event.recipes.createFilling(inter2, [inter2, Fluid.of("tconstruct:molten_amethyst_bronze", 720)])
        ]).transitionalItem(inter2).loops(1).id('kubejs:sequenced_assembly/blazing_machine')
})