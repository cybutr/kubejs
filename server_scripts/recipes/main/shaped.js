ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:andesite_machine', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#kubejs:anuggets',
            B: '#forge:saws',
            C: 'minecraft:stick',
            D: 'create:andesite_casing',
            E: 'create:cogwheel'
        }
    ).damageIngredient('#forge:saws', '5').id('kubejs:shaped/andesite_machine')

    event.shaped(
        Item.of('kubejs:saw', 1),
        [
            '   ',
            'ABC',
            '   '
        ],
        {
            A: '#minecraft:planks',
            B: '#kubejs:aingots',
            C: '#kubejs:anuggets'
        }
    ).id('kubejs:shaped/saw')

    event.shaped(
        Item.of('kubejs:screwdriver', 1),
        [
            '   ',
            'ABC',
            '   '
        ],
        {
            A: 'kubejs:deepslate_alloy',
            B: 'vintageimprovements:aluminum_rod',
            C: 'vintageimprovements:aluminum_rod'
        }
    ).id('kubejs:shaped/screwdriver')

    event.shaped(
        Item.of('kubejs:saw_blade', 1),
        [
            'BCB',
            'CAC',
            'BCB'
        ],
        {
            A: 'create:iron_sheet',
            B: '#kubejs:anuggets',
            C: 'create:andesite_alloy'
        }
    ).id('kubejs:shaped/saw_blade')

    event.shaped(
        Item.of('kubejs:drill_head', 1),
        [
            ' C',
            'CBC',
            'BAB'
        ],
        {
            A: 'create:iron_sheet',
            B: '#kubejs:anuggets',
            C: 'create:andesite_alloy'
        }
    ).id('kubejs:shaped/drill_head')
})