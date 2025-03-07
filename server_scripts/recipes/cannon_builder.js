ServerEvents.recipes(event => {
    event.shaped(
        Item.of('createbigcannons:cannon_builder', 1),
        [
            'ABA',
            ' DC',
            ' E '
        ],
        {
            A: '#kubejs:anuggets',
            B: 'create_dd:industrial_iron_sheet',
            C: '#forge:screwdrivers',
            D: 'kubejs:andesite_machine',
            E: 'create:piston_extension_pole'
        }
    ).id('createbigcannons:cannon_builder')
})