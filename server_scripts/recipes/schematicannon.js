ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:schematicannon', 1),
        [
            ' AB',
            'FCD',
            'EEE'
        ],
        {
            A: 'createbigcannons:cast_iron_autocannon_breech',
            B: '#forge:saws',
            C: 'kubejs:andesite_machine',
            D: '#forge:screwdrivers',
            E: 'create_dd:andesite_sheet',
            F: 'create_dd:inductive_mechanism'
        }
    )
})