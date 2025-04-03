ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('vs_tournament:sensor', [
        'ADEA',
        'ABFA',
        'ACEA'                  
    ], {
        A: 'vintageimprovements:cast_iron_sheet',
        B: 'vintageimprovements:laser',
        C: 'create:precision_mechanism',
        D: 'create_dd:calculation_mechanism',
        E: 'kubejs:nickel_tube',
        F: 'minecraft:amethyst_shard'
    }).id('kubejs:vs_tournament/distance')
})