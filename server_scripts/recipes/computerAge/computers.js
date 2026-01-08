ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:incomplete_computer')
    event.recipes.create.sequenced_assembly('computercraft:computer_normal', 'kubejs:incomplete_computer',
        [event.recipes.create.filling(inter, [inter, Fluid.of('tconstruct:molten_gold', 135)]),
        event.recipes.create.deploying(inter, [inter, 'kubejs:graphics_unit']),
        event.recipes.create.filling(inter, [inter, Fluid.of('tconstruct:molten_electrum', 135)]),
        event.recipes.create.deploying(inter, [inter, 'kubejs:hard_drive']),
        event.recipes.create.deploying(inter, [inter, 'createrailwaysnavigator:advanced_display']),
        event.recipes.create.deploying(inter, [inter, '#forge:screwdrivers'])]).transitionalItem(inter).loops(1).id('kubejs:sequenced_assembly/computer_normal')

    let iinter = Item.of('advancedperipherals:peripheral_casing')
    event.recipes.create.sequenced_assembly('kubejs:incomplete_computer', 'advancedperipherals:peripheral_casing',
        [event.recipes.create.cutting(iinter, iinter),
        event.recipes.create.filling(iinter, [iinter, Fluid.of('tconstruct:molten_copper', 450)]),
        event.recipes.create.deploying(iinter, [iinter, 'kubejs:motherboard']),
        event.recipes.create.deploying(iinter, [iinter, 'create_connected:control_chip']),
        event.recipes.create.deploying(iinter, [iinter, 'tfmg:lithium_charge']),
        event.recipes.create.deploying(iinter, [iinter, '#forge:screwdrivers'])]).transitionalItem(iinter).loops(1).id('kubejs:sequenced_assembly/incomplete_computer')

    let pinter = Item.of('kubejs:motherboard')
    event.recipes.create.sequenced_assembly('computercraft:pocket_computer_normal', 'kubejs:motherboard',
        [event.recipes.create.deploying(pinter, [pinter, 'create_connected:control_chip']),
        event.recipes.create.deploying(pinter, [pinter, 'computercraft:disk']),
        event.recipes.create.filling(pinter, [pinter, Fluid.of('tfmg:liquid_plastic', 270)]),
        event.recipes.create.deploying(pinter, [pinter, 'createrailwaysnavigator:advanced_display_half_panel']),
        event.recipes.create.pressing(pinter, pinter)]).transitionalItem(pinter).loops(1).id('kubejs:sequenced_assembly/pocket_computer')

    let ainter = Item.of('computercraft:computer_normal')
    event.recipes.create.sequenced_assembly('computercraft:computer_advanced', 'computercraft:computer_normal',
        [event.recipes.create.cutting(ainter, ainter),
        event.recipes.create.deploying(ainter, [ainter, 'vintageimprovements:refined_obsidian_wire']),
        event.recipes.create.filling(ainter, [ainter, Fluid.of('kubejs:molten_redstone', 270)]),
        event.recipes.create.filling(ainter, [ainter, Fluid.of('kubejs:enriched_water', 270)]),
        event.recipes.create.deploying(ainter, [ainter, 'minecraft:gold_ingot']),
        event.recipes.create.pressing(ainter, ainter)]).transitionalItem(ainter).loops(1).id('kubejs:sequenced_assembly/advanced_computer')

    let apinter = Item.of('computercraft:pocket_computer_normal')
    event.recipes.create.sequenced_assembly('computercraft:pocket_computer_advanced', 'computercraft:pocket_computer_normal',
        [event.recipes.create.cutting(apinter, apinter),
        event.recipes.create.deploying(apinter, [apinter, 'vintageimprovements:refined_obsidian_wire']),
        event.recipes.create.filling(apinter, [apinter, Fluid.of('kubejs:molten_redstone', 90)]),
        event.recipes.create.filling(apinter, [apinter, Fluid.of('kubejs:enriched_water', 90)]),
        event.recipes.create.deploying(apinter, [apinter, 'minecraft:gold_nugget']),
        event.recipes.create.pressing(apinter, apinter)]).transitionalItem(apinter).loops(1).id('kubejs:sequenced_assembly/advanced_pocket_computer')
})