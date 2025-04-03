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
})