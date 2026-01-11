ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    let c = 'kubejs:brass_machine'
    let i = 'create_dd:integrated_mechanism'
    let w = 'kubejs:brass_upgrade_smithing_template'
    sm('4x create:sequenced_gearshift', c, w, 'create:electron_tube')
    sm('4x create:brass_tunnel', i, w, 'create:electron_tube')
    sm('4x create:brass_funnel', i, w, 'create:electron_tube')
    sm('4x create:redstone_link', i, w, 'minecraft:redstone_torch')
    sm('2x create:display_link', i, w, 'create:nixie_tube')
    sm('2x railways:portable_fuel_interface', i, w, 'create:railway_casing')
    sc('create_things_and_misc:card_reader', c, 1)
    sc('create_things_and_misc:card_press', c, 1)
    sc('create_connected:brass_gearbox', c, 4)
    sc('create_connected:vertical_brass_gearbox', c, 4)
    event.recipes.create.mechanical_crafting('petrolsparts:hydraulic_transmission', [
        'CSM',
        'HPB',
        ' P ',
        'INI',
        'MSC'], {
        C: 'create:cogwheel',
        S: 'create:brass_sheet',
        M: 'create:precision_mechanism',
        P: 'tfmg:brass_pipe',
        I: 'create:sturdy_sheet',
        N: 'kubejs:brass_machine',
        B: 'minecraft:water_bucket',
        H: 'create_sa:hydraulic_engine',
    }).id('kubejs:petrolsparts/hydraulic_transmission')
    event.recipes.create.mechanical_crafting('create:extendo_grip', [
        ' B ',
        'SMN',
        'ICI',
        'III',
        'OHO'
    ], {
        B: 'create:brass_ingot',
        I: 'stick',
        S: '#forge:saws',
        M: 'create:precision_mechanism',
        N: 'create_dd:integrated_mechanism',
        C: 'create:cogwheel',
        O: 'vintageimprovements:aluminum_spring',
        H: 'create:brass_hand'
    }).id('kubejs:create/extendo_grip')
    event.recipes.create.mechanical_crafting('create:wand_of_symmetry', [
        ' G ',
        'GPG',
        ' M ',
        'CBC',
        ' O '
    ], {
        G: '#forge:glass',
        P: 'minecraft:ender_pearl',
        M: 'create:precision_mechanism',
        C: 'create_dd:refined_radiance',
        B: 'create:brass_sheet',
        O: 'minecraft:obsidian',
    }).id('kubejs:create/wand_of_symmetry')
    event.shaped(Item.of('create:steam_engine', 3), [
        ' G ',
        ' AH',
        'BCS'
    ], {
        C: 'kubejs:brass_machine',
        G: 'create:golden_sheet',
        A: 'create:andesite_alloy',
        H: 'create_sa:steam_engine',
        B: 'minecraft:copper_block',
        S: '#forge:screwdrivers'
    }).damageIngredient('#forge:screwdrivers', '5').id('kubejs:shaped/steam_engine')
})