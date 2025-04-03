ServerEvents.recipes(event => {
    let FC = (id) => { return Item.of('functionalstorage:' + id) }
    event.shaped(
        Item.of(FC('fluid_1'), 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#minecraft:planks',
            B: 'create:fluid_tank',
        }
    ).id('kubejs:shaped/fluid_1')
    event.shaped(
        Item.of(FC('fluid_2'), 1),
        [
            'ABA',
            'AAA',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'create:fluid_tank',
        }
    ).id('kubejs:shaped/fluid_2')
    event.shaped(
        Item.of(FC('fluid_4'), 1),
        [
            'BAB',
            'AAA',
            'BAB'
        ],
        {
            A: '#minecraft:planks',
            B: 'create:fluid_tank',
        }
    ).id('kubejs:shaped/fluid_4')
    event.shaped(
        Item.of(FC('compacting_drawer'), 1),
        [
            'AAA',
            'BCB',
            'ADA'
        ],
        {
            A: 'minecraft:stone',
            B: 'create:mechanical_press',
            C: '#functionalstorage:drawer',
            D: 'vintageimprovements:aluminum_spring'
        }
    ).id('kubejs:shaped/compacting_drawer')
    event.shaped(
        Item.of(FC('controller_extension'), 1),
        [
            'ABA',
            'DCD',
            'AEA'
        ],
        {
            A: '#forge:stone',
            B: 'minecraft:quartz_block',
            C: 'kubejs:copper_machine',
            D: '#functionalstorage:drawer',
            E: 'create:linked_controller'
        }
    ).id('kubejs:shaped/controller_extension')
    event.shaped(
        Item.of(FC('storage_controller'), 1),
        [
            'ABA',
            'DCD',
            'AEA'
        ],
        {
            A: '#forge:stone',
            B: 'minecraft:quartz_block',
            C: '#functionalstorage:drawer',
            D: 'kubejs:copper_machine',
            E: 'create:linked_controller'
        }
    ).id('kubejs:shaped/storage_controller')
    event.shaped(
        Item.of(FC('simple_compacting_drawer'), 1),
        [
            'AAA',
            'ABC',
            'ADA'
        ],
        {
            A: 'minecraft:stone',
            B: '#functionalstorage:drawer',
            C: 'create:mechanical_press',
            D: 'vintageimprovements:aluminum_spring',
        }
    ).id('kubejs:shaped/simple_compacting_drawer')
    // Framed
    event.shaped(
        Item.of(FC('framed_simple_compacting_drawer'), 1),
        [
            'AAA',
            'ABC',
            'ADA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: '#functionalstorage:drawer',
            C: 'create:mechanical_press',
            D: 'vintageimprovements:aluminum_spring',
        }
    ).id('kubejs:shaped/framed_simple_compacting_drawer')
    event.shaped(
        Item.of(FC('compacting_framed_drawer'), 1),
        [
            'AAA',
            'BCB',
            'ADA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'create:mechanical_press',
            C: '#functionalstorage:drawer',
            D: 'vintageimprovements:aluminum_spring'
        }
    ).id('kubejs:shaped/compacting_framed_drawer')
    event.shaped(
        Item.of(FC('framed_storage_controller'), 1),
        [
            'ABA',
            'DCD',
            'AEA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:quartz_block',
            C: '#functionalstorage:drawer',
            D: 'kubejs:copper_machine',
            E: 'create:linked_controller'
        }
    ).id('kubejs:shaped/framed_storage_controller')
    event.shaped(
        Item.of(FC('framed_controller_extension'), 1),
        [
            'ABA',
            'DCD',
            'AEA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:quartz_block',
            C: 'kubejs:copper_machine',
            D: '#functionalstorage:drawer',
            E: 'create:linked_controller'
        }
    ).id('kubejs:shaped/framed_controller_extension')
    event.shaped(
        Item.of(FC('linking_tool'), 1),
        [
            'AAB',
            'ACB',
            'ADE'
        ],
        {
            A: 'minecraft:paper',
            B: 'create:brass_ingot',
            C: 'kubejs:brass_machine',
            D: 'minecraft:netherite_ingot',
            E: 'create:linked_controller'
        }
    ).id('kubejs:shaped/linking_tool')
    event.shaped(
        Item.of(FC('configuration_tool'), 1),
        [
            'AAB',
            'ACB',
            'ADE'
        ],
        {
            A: 'minecraft:paper',
            B: 'tfmg:aluminum_ingot',
            C: 'kubejs:andesite_machine',
            D: 'minecraft:emerald',
            E: '#forge:screwdrivers'
        }
    ).id('kubejs:shaped/configuration_tool')
})