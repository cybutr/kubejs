ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:schematicannon', 1),
        [
            ' AB',
            'FCD',
            'EEE'
        ],
        {
            A: 'tfmg:cast_iron_pipe',
            B: '#forge:saws',
            C: 'kubejs:andesite_machine',
            D: '#forge:screwdrivers',
            E: 'create_dd:andesite_sheet',
            F: 'create_dd:inductive_mechanism'
        }
    ).damageIngredient('#forge:saws', '5').damageIngredient('#forge:screwdrivers', '5').id('create:schematicannon')
})