ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    let c = 'kubejs:andesite_machine'
    let w = 'kubejs:andesite_upgrade_smithing_template'
    sc('create:andesite_funnel', c, 4)
    sc('create:andesite_tunnel', c, 4)
    sc('create:gearbox', c, 4)
    sc('create:vertical_gearbox', c, 4)
    sc('create:portable_storage_interface', c, 2)
    sc('trackwork:track_level_controller', c, 1)
    sc('railways:track_switch_andesite', c, 2)
    sc("create:mechanical_harvester", c, 2)
    sc("create:mechanical_plough", c, 2)
    sm('2x create_connected:six_way_gearbox', 'create:gearbox', w, 'create:vertical_gearbox')
    sm('2x create_connected:vertical_six_way_gearbox', 'create:vertical_gearbox', w, 'create:gearbox')
    sm('2x create_connected:parallel_gearbox', 'create:gearbox', w, 'create:large_cogwheel')
    sm('2x create_connected:vertical_parallel_gearbox', 'create:vertical_gearbox', w, 'create:large_cogwheel')
    sm('create_radar:radar_receiver_block', c, w, 'minecraft:lightning_rod')
    sm('create:encased_fan', c, w, 'create:propeller')
    sm('create:mechanical_press', c, w, 'minecraft:iron_block')
    sm('create:mechanical_mixer', c, w, 'create:whisk')
    sm('create:rope_pulley', c, w, 'farmersdelight:rope')
    sm('create:mechanical_drill', c, w, 'kubejs:drill_head')
    sm('create:mechanical_saw', c, w, 'kubejs:saw_blade')
    sm('create:deployer', c, w, 'create:brass_hand')
    sm('create:mechanical_roller', c, w, 'create:crushing_wheel')
    sm('sliceanddice:slicer', c, w, 'create:turntable')

    event.shaped(
        Item.of('create:large_water_wheel', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#minecraft:planks',
            B: 'kubejs:andesite_machine',
        }
    ).id('kubejs:shaped/large_water_wheel')

    event.shaped(
        Item.of('create:millstone', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: 'create:cogwheel',
            B: 'kubejs:andesite_machine',
            C: '#forge:stone'
        }
    ).id('kubejs:shaped/millstone')

    event.shaped(
        Item.of('create:mechanical_bearing', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            C: 'create:shaft',
            B: c
        }
    ).id('kubejs:shaped/mechanical_bearing')

    event.shaped(
        Item.of('create:windmill_bearing', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            C: c,
            B: '#forge:stone'
        }
    ).id('kubejs:shaped/windmill_bearing')

    event.shaped(
        Item.of('create:cuckoo_clock', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:planks',
            B: c,
            C: 'minecraft:clock'
        }
    ).id('kubejs:shaped/cuckoo_clock')

    event.shaped(
        Item.of('create:gantry_carriage', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'kubejs:andesite_machine',
            C: 'create:cogwheel'
        }
    ).id('kubejs:shaped/gantry_carriage')

    event.shaped(
        Item.of('create:mechanical_piston', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'kubejs:andesite_machine',
            C: 'create:piston_extension_pole'
        }
    ).id('kubejs:shaped/mechanical_piston')

    event.shaped(
        Item.of('create:mechanical_press', 1),
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: '#forge:saws',
            B: 'kubejs:andesite_machine',
            C: 'minecraft:iron_block',
            D: 'create:shaft'
        }
    ).damageIngredient('#forge:saws', '5').id('kubejs:shaped/mechanical_press')

    event.shaped(
        Item.of('create:mechanical_mixer', 1),
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: '#forge:saws',
            B: 'kubejs:andesite_machine',
            C: 'create:whisk',
            D: 'create:andesite_alloy'
        }
    ).damageIngredient('#forge:saws', '5').id('kubejs:shaped/mechanical_mixer')

    event.shaped(
        Item.of('vintageimprovements:spring_coiling_machine', 1),
        [
            'A  ',
            'BCD',
            'A  '
        ],
        {
            A: '#kubejs:aingots',
            B: 'vintageimprovements:spring_coiling_machine_wheel',
            C: 'kubejs:andesite_machine',
            D: 'create:shaft'
        }
    ).id('kubejs:shaped/spring_coiling_machine')
})