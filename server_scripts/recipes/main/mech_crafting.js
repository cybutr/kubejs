ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('trackwork:phys_track', [
    ' DDD ',
    'DABAD',
    'DBCBD',
    'DABAD',
    ' DDD '
    ], {
        D: 'create:belt_connector',
        A: 'create:andesite_alloy',
        B: '#minecraft:planks',
        C: 'create:cogwheel',
    }).id('kubejs:phys_track')
})