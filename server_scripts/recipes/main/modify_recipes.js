ServerEvents.recipes(event => {
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/lpg_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/steel_mechanism' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'functionalstorage:gold_upgrade' }, 'functionalstorage:copper_upgrade', 'kubejs:brass_machine')
    event.replaceInput({ id: 'functionalstorage:gold_upgrade' }, 'minecraft:gold_block', 'create:brass_block')
    event.replaceInput({ id: 'functionalstorage:gold_upgrade' }, 'minecraft:gold_ingot', 'create:brass_ingot')
    event.replaceInput({ id: 'functionalstorage:copper_upgrade' }, '#functionalstorage:drawer', 'kubejs:copper_machine')
    event.replaceInput({ id: 'functionalstorage:armory_cabinet' }, 'minecraft:comparator', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create_sa:experience_pickaxe_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_sword_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_shovel_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_axe_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'createaddition:crafting/rolling_mill' }, 'create:andesite_casing', 'kubejs:andesite_machine')
    event.replaceInput({ input: 'alexscaves:limestone' }, 'alexscaves:limestone', 'create:limestone')
    event.replaceInput({ input: 'quark:limestone' }, 'quark:limestone', 'create:limestone')
    event.replaceOutput({ output: 'alexscaves:limestone' }, 'alexscaves:limestone', 'create:limestone')
    event.replaceOutput({ output: 'quark:limestone' }, 'quark:limestone', 'create:limestone')
    event.replaceInput({ id: 'create:crafting/kinetics/brass_hand' }, 'create:brass_sheet', '#minecraft:wooden_slabs')
    event.replaceInput({ input: 'tfmg:steel_casing' }, 'tfmg:steel_casing', 'create_dd:steel_casing')
    event.replaceInput({ id: 'create:crafting/kinetics/mechanical_crafter' }, 'create:brass_casing', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create:crafting/kinetics/mechanical_arm' }, 'create:brass_casing', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create:crafting/kinetics/rotation_speed_controller' }, 'create:brass_casing', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create:crafting/logistics/stockpile_switch' }, 'create:brass_casing', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create:crafting/logistics/content_observer' }, 'create:brass_casing', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create:crafting/kinetics/smart_chute' }, 'create:brass_sheet', 'create_dd:integrated_mechanism')
    event.replaceInput({ id: 'computercraft:pocket_computer_advanced' }, 'minecraft:golden_apple', 'create_dd:linked_controller')
    
    let sids = [
        'tfmg:crafting/diesel_engine_expansion',
        'tfmg:mechanical_crafting/surface_scanner',
        'tfmg:mechanical_crafting/diesel_engine',
        'tfmg:mechanical_crafting/large_radial_engine',
        'tfmg:mechanical_crafting/radial_engine',
        'tfmg:mechanical_crafting/steel_distillation_controller',
        'tfmg:mechanical_crafting/engine_base'

    ]
    sids.forEach((id) => {
        event.replaceInput({ id: id }, 'tfmg:heavy_machinery_casing', 'kubejs:steel_machine')
    })
})