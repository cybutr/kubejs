ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('trackwork:phys_track', [
    ' DDD ',
    'DABAD',
    'DBCBD',
    'DABAD',
    ' DDD '
    ], {
        D: 'create:belt_connector',
        A: 'create:andesite_alloy',
        B: '#minecraft:planks',
        C: 'create:cogwheel',
    }).id('trackwork:mechanical_crafting/phys_track')

    event.recipes.create.mechanical_crafting('createrailwaysnavigator:navigator', [
        'ABA',
        'BCB',
        'BDB',
        'AEA'
    ], {
        A: 'create:andesite_alloy',
        B: 'create_dd:industrial_iron_sheet',
        C: 'kubejs:graphics_unit',
        D: 'create:precision_mechanism',
        E: 'create:copper_sheet'
    }).id('createrailwaysnavigator:mechanical_crafting/navigator')

    event.recipes.create.mechanical_crafting('northstar:circuit_engraver', [
        'ABA',
        'CDC',
        'AEA',
        ' F '
    ], {
        A: 'create_dd:rubber',
        B: 'create_things_and_misc:vibration_mechanism',
        C: 'create:shaft',
        D: 'kubejs:brass_machine',
        E: 'vintageimprovements:laser_item',
        F: 'northstar:amethyst_crystal'
    }).id('northstar:mechanical_crafting/circuit_engraver')

    event.recipes.create.mechanical_crafting('northstar:temperature_regulator', [
        'ABC',
        'ABC',
        'DED',
        'FFF',
        'DGD'
    ], {
        A: 'minecraft:blue_ice',
        B: 'tfmg:steel_ingot',
        C: 'minecraft:blaze_rod',
        D: 'tfmg:steel_sheet',
        E: 'kubejs:blazing_machine',
        F: 'northstar:advanced_circuit',
        G: 'create:shaft'
    }).id('northstar:mechanical_crafting/temperature_regulator')

    event.recipes.create.mechanical_crafting('northstar:solar_panel', [
        'AAA',
        'AAA',
        'FEF',
        'CDC',
        'CBC'
    ], {
        A: "minecraft:tinted_glass",
        B: 'create:shaft',
        C: 'create_dd:steel_sheet',
        D: 'northstar:circuit',
        E: 'kubejs:steel_machine',
        F: 'create_dd:abstruse_mechanism'
    }).id('northstar:mechanical_crafting/solar_panel')

    event.recipes.create.mechanical_crafting('northstar:rocket_station', [
        ' AAA ',
        'ABCBA',
        'ADEDA',
        'ABCBA',
        ' AFA '
    ], {
        A: 'create_dd:steel_sheet',
        B: 'create_dd:abstruse_mechanism',
        C: 'northstar:circuit',
        D: 'northstar:targeting_computer',
        E: 'kubejs:steel_machine',
        F: 'create:shaft'
    }).id('northstar:mechanical_crafting/rocket_station')

    event.recipes.create.mechanical_crafting('northstar:rocket_controls', [
        ' A ',
        'BCB',
        'BDB',
    ], {
        A: 'create_dd:abstruse_mechanism',
        B: 'create_dd:steel_sheet',
        C: 'create:contraption_controls',
        D: 'northstar:circuit'
    }).id('northstar:mechanical_crafting/rocket_controls')

    event.recipes.create.mechanical_crafting('northstar:iron_space_suit_helmet', [
        'AAA',
        'AEA',
        'CBC',
        'DDD'
    ], {
        A: "minecraft:tinted_glass",
        B: "tfmg:steel_helmet",
        C: "tconstruct:silky_cloth",
        D: "vintageimprovements:nethersteel_sheet",
        E: "minecraft:orange_dye"
    }).id('northstar:mechanical_crafting/iron_space_suit_helmet')

    event.recipes.create.mechanical_crafting('northstar:iron_space_suit_chestpiece', [
        'CEC',
        'BDB',
        'EBE',
    ], {
        B: "tconstruct:silky_cloth",
        C: "create:netherite_backtank",
        D: "tfmg:steel_chestplate",
        E: "vintageimprovements:nethersteel_sheet"
    }).id('northstar:mechanical_crafting/iron_space_suit_chestpiece')

    event.recipes.create.mechanical_crafting('northstar:iron_space_suit_leggings', [
        'ABA',
        'BDB',
        'ABA',
    ], {
        B: "vintageimprovements:nethersteel_sheet",
        A: "tconstruct:silky_cloth",
        D: "tfmg:steel_leggings"
    }).id('northstar:mechanical_crafting/iron_space_suit_leggings')

    event.recipes.create.mechanical_crafting('northstar:iron_space_suit_boots', [
        ' B ',
        'BDB',
        ' B ',
    ], {
        B: "vintageimprovements:nethersteel_sheet",
        D: "tfmg:steel_boots"
    }).id('northstar:mechanical_crafting/iron_space_suit_boots')

    event.recipes.create.mechanical_crafting('northstar:martian_steel_space_suit_helmet', [
        'AAA',
        'AEA',
        'CBC',
        'DDD'
    ], {
        A: "minecraft:tinted_glass",
        B: "northstar:martian_steel_helmet",
        C: "tconstruct:silky_cloth",
        D: "vintageimprovements:nethersteel_sheet",
        E: "minecraft:blue_dye"
    }).id('northstar:mechanical_crafting/martian_steel_space_suit_helmet')

    event.recipes.create.mechanical_crafting('northstar:martian_steel_space_suit_chestpiece', [
        'CEC',
        'BDB',
        'EBE',
    ], {
        B: "tconstruct:silky_cloth",
        C: "create:netherite_backtank",
        D: "northstar:martian_steel_chestplate",
        E: "vintageimprovements:nethersteel_sheet"
    }).id('northstar:mechanical_crafting/martian_steel_space_suit_chestpiece')

    event.recipes.create.mechanical_crafting('northstar:martian_steel_space_suit_leggings', [
        'ABA',
        'BDB',
        'ABA',
    ], {
        B: "vintageimprovements:nethersteel_sheet",
        A: "tconstruct:silky_cloth",
        D: "northstar:martian_steel_leggings"
    }).id('northstar:mechanical_crafting/martian_steel_space_suit_leggings')

    event.recipes.create.mechanical_crafting('northstar:martian_steel_space_suit_boots', [
        ' B ',
        'BDB',
        ' B ',
    ], {
        B: "vintageimprovements:nethersteel_sheet",
        D: "northstar:martian_steel_boots"
    }).id('northstar:mechanical_crafting/martian_steel_space_suit_boots')

})