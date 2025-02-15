ServerEvents.recipes(event => {
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/lpg_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/steel_mechanism' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'functionalstorage:gold_upgrade' }, 'functionalstorage:copper_upgrade', 'kubejs:brass_machine')
    event.replaceInput({ id: 'functionalstorage:copper_upgrade' }, '#functionalstorage:drawer', 'kubejs:copper_machine')
    event.replaceInput({ id: 'functionalstorage:armory_cabinet' }, 'minecraft:comparator', 'kubejs:brass_machine')
    event.replaceInput({ id: 'create_sa:experience_pickaxe_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_sword_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_shovel_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'create_sa:experience_axe_recipe' }, 'create_sa:zinc_handle', 'vintageimprovements:zinc_rod')
    event.replaceInput({ id: 'createaddition:crafting/rolling_mill' }, 'create:andesite_machine', 'kubejs:andesite_machine')
    event.replaceInput({ input: 'alexscaves:limestone' }, 'alexscaves:limestone', 'create:limestone')
    event.replaceInput({ input: 'quark:limestone' }, 'quark:limestone', 'create:limestone')
    event.replaceOutput({ output: 'alexscaves:limestone' }, 'alexscaves:limestone', 'create:limestone')
    event.replaceOutput({ output: 'quark:limestone' }, 'quark:limestone', 'create:limestone')
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