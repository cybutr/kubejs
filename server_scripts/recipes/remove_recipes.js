ServerEvents.recipes(event => {
    event.remove({ id: 'vintageimprovements:pressurizing/sulfuric_acid' })
    event.remove({ id: 'vintageimprovements:pressurizing/copper_sulfate' })
    event.remove({ id: 'tfmg:mixing/sulfuric_acid' })
    event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
    event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
    event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
    event.remove({ output: 'create_sa:netherite_jetpack_chestplate' })
    event.remove({ id: 'createaddition:mixing/netherrack' })
    event.remove({ id: 'create_sa:netherrack_recipe' })
    event.remove({ id: 'tfmg:mixing/zinc_sulfate' })
    event.remove({ id: 'tfmg:mixing/copper_sulfate' })
    event.remove({ output:{ Fluid: "tconstruct:honey"}} )
    event.remove({ output: 'minecraft:elytra' })
    let removeItems = [
        'stator', 'electric_post', 'electric_diode', 'resistor', 'copper_coil','electric_pump', 'diagonal_cable_block', 'cable_tube', 'neon_tube', 'copper_cable_hub', 
        'steel_cable_hub', 'aluminum_cable_hub', 'copper_cable_hub', 'steel_casing_cable_hub', 'heavy_cable_hub', 'voltmeter', 'cable_connector', 'energy_meter',
        'traffic_light', 'voltage_observer', 'light_bulb', 'rbg_light_bulb', 'brass_cable_hub', 'segment_display', 'fuse_block', 'capacitor', 'accumulator', 'polarizer',
        'converter', 'generator', 'rotor', 'electric_motor', 'galvanic_cell']
    removeItems.forEach(item => {
        event.remove({output: 'tfmg:' + item})
    })
})
