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
    event.recipes.vintageimprovementsHammering(Item.of('northstar:martian_steel_sheet', 1), 'northstar:martian_steel', 2).id('kubejs:hammering/martian_steel_sheet')
    event.recipes.vintageimprovementsHammering(Item.of('northstar:tungsten_sheet', 1), 'northstar:tungsten_ingot', 2).id('kubejs:hammering/tungsten_sheet')


    event.recipes.create.mechanical_crafting(
        Item.of('create_dd:industrial_fan'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'northstar:iron_cogwheel',
            B: 'create_dd:steel_sheet',
            C: 'create:encased_fan',
            D: 'create_dd:infernal_mechanism'
        }
    ).id('kubejs:mechanical_crafting/industrial_fan')

})