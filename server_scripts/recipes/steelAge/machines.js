ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting(
        Item.of('vs_clockwork:physics_infuser'),
        [
            'RBTB ',
            'TMSMT',
            ' BTBR'
        ],
        {
            S: 'kubejs:steel_machine',
            M: 'vs_clockwork:wanderlite_matrix',
            T: 'create_dd:steel_sheet',
            B: 'create:brass_ingot',
            R: 'create_dd:refined_radiance_sheet'
        }
    ).id('kubejs:mechanical_crafting/physics_infuser')
    event.recipes.vintageimprovementsHammering(Item.of('create_dd:steel_sheet', 1), 'tfmg:steel_ingot', 2).id('kubejs:hammering/steel_sheet')
})