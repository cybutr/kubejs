ServerEvents.recipes(event => {
    let recipeIds = [
        'vintageimprovements:pressurizing/sulfuric_acid',
        'vintageimprovements:pressurizing/copper_sulfate',
        'tfmg:mixing/sulfuric_acid',
        'createaddition:mixing/netherrack',
        'create_sa:netherrack_recipe',
        'tfmg:mixing/zinc_sulfate',
        'tfmg:mixing/copper_sulfate',
        'create:mixing/brass_ingot',
        'create:crafting/materials/electron_tube',
        'tconstruct:smeltery/alloys/molten_brass',
        'tconstruct:smeltery/entity_melting/bee',
        'tconstruct:smeltery/melting/slime/honey_block',
        'create:item_application/brass_casing_from_log_using_deployer',
        'create:item_application/brass_casing_from_wood_using_deployer',
        'create:item_application/brass_casing_from_wood',
        'create:item_application/brass_casing_from_log',
        'create:item_application/brass_casing_from_log_using_deployer',
        'create:crafting/materials/rose_quartz',
        'createaddition:crafting/redstone_relay',
        'createaddition:crafting/small_connector_copper',
        'createaddition:crafting/festive_spool',
        'createaddition:crafting/electrum_spool',
        'createaddition:crafting/gold_spool',
        'createaddition:crafting/copper_spool',
        'createaddition:crafting/spool',
        'createaddition:crafting/small_light_connector',
        'tfmg:crafting/electric_casing',
        'tfmg:casting/steel',
        'tfmg:casting/amogus',
        'createaddition:crafting/portable_energy_interface'
    ]
    
    let recipeOutputs = [
        'create_sa:brass_jetpack_chestplate',
        'create_sa:copper_jetpack_chestplate',
        'create_sa:andesite_jetpack_chestplate',
        'create_sa:netherite_jetpack_chestplate',
        'minecraft:elytra',
        'tconstruct:slime_chestplate',
        'createaddition:capacitor',
        'createaddition:tesla_coil',
        'createaddition:accumulator',
        'createaddition:alternator',
        'createaddition:electric_motor',
        'createaddition:large_connector',
    ]
    
    let recipeInputs = [];
    
    recipeIds.forEach(id => {
        event.remove({ id: id });
    })
    
    recipeOutputs.forEach(output => {
        event.remove({ output: output });
    })
    
    recipeInputs.forEach(input => {
        event.remove({ input: input });
    })
    let removeTFMGItems = [
        'stator', 'electric_post', 'electric_diode', 'resistor', 'copper_coil','electric_pump', 'diagonal_cable_block', 'cable_tube', 'neon_tube', 'copper_cable_hub', 
        'steel_cable_hub', 'aluminum_cable_hub', 'copper_cable_hub', 'steel_casing_cable_hub', 'heavy_cable_hub', 'voltmeter', 'cable_connector', 'energy_meter',
        'traffic_light', 'voltage_observer', 'light_bulb', 'rbg_light_bulb', 'brass_cable_hub', 'segmented_display', 'fuse_block', 'capacitor', 'accumulator', 'polarizer',
        'transistor', 'converter', 'generator', 'rotor', 'electric_motor', 'galvanic_cell']
    removeTFMGItems.forEach(item => {
        event.remove({output: 'tfmg:' + item})
    })
})
