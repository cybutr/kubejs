ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create_radar:auto_pitch_controller', 1),
        [
            ' B ',
            ' DC',
            ' E '
        ],
        {
            B: 'create:precision_mechanism',
            C: '#forge:screwdrivers',
            D: 'kubejs:brass_machine',
            E: 'create:vertical_gearbox'
        }
    ).id('createbigcannons:auto_pitch_controller')

    event.shaped(
        Item.of('create_radar:auto_yaw_controller', 1),
        [
            ' C ',
            'BDE',
            '   '
        ],
        {
            B: 'create:precision_mechanism',
            C: '#forge:screwdrivers',
            D: 'kubejs:brass_machine',
            E: 'create:vertical_gearbox'
        }
    ).id('createbigcannons:auto_yaw_controller')
})