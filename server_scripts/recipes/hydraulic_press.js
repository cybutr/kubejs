ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create_dd:hydraulic_press'),
        [
            ' H ',
            'SP ',
            ' C '
        ],
        {
            H: 'create_sa:hydraulic_engine',
            P: 'create:mechanical_press',
            C: 'create_dd:hydraulic_casing',
            S: '#forge:screwdrivers'
        }
    ).damageIngredient('#forge:screwdrivers', '5').id('create_dd:hydraulic_press')
})