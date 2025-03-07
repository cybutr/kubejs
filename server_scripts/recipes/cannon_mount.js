ServerEvents.recipes(event => {
    event.shaped(
        Item.of('createbigcannons:cannon_mount', 1),
        [
            'AAA',
            'BDC',
            'EFG'
        ],
        {
            A: 'create_dd:industrial_iron_sheet',
            B: '#forge:saws',
            C: 'create:gearbox',
            D: 'kubejs:andesite_machine',
            E: '#forge:screwdrivers',
            F: 'create:shaft',
            G: 'create:vertical_gearbox'
        }
    ).id('createbigcannons:cannon_mount')
})