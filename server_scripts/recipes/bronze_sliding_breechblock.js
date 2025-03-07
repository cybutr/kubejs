ServerEvents.recipes(event => {
    event.shaped(
        Item.of('createbigcannons:bronze_sliding_breechblock', 1),
        [
            ' A ',
            'BAB',
            ' A '
        ],
        {
            A: '#forge:ingots/strong_bronze',
            B: 'create:cogwheel'
        }
    ).id('createbigcannons:bronze_sliding_breechblock')
})