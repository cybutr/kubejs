ServerEvents.recipes(event => {
    // Spur to/from Bevel
    event.shapeless(Item.of('numismatics:spur', 8),
        ['numismatics:bevel']
    ).id('numismatics:spur_from_bevel')
    event.shapeless(Item.of('numismatics:bevel', 1),
        ['8x numismatics:spur']
    ).id('numismatics:bevel_from_spur')
    // Bevel to/from Sprocket (2 bevels = 1 sprocket)
    event.shapeless(Item.of('numismatics:bevel', 2),
        ['numismatics:sprocket']
    ).id('numismatics:bevel_from_sprocket')

    event.shapeless(Item.of('numismatics:sprocket', 1),
        ['2x numismatics:bevel']
    ).id('numismatics:sprocket')
    // Sprocket to/from Cog (4 sprockets = 1 cog)
    event.shapeless(Item.of('numismatics:sprocket', 4),
        ['numismatics:cog']
    ).id('numismatics:sprocket_from_cog')
    event.shapeless(Item.of('numismatics:cog', 1),
        ['4x numismatics:sprocket']
    ).id('numismatics:cog')
    
    // Cog to/from Crown (8 cogs = 1 crown)
    event.shapeless(Item.of('numismatics:cog', 8),
        ['numismatics:crown']
    ).id('numismatics:cog_from_crown')
    event.shapeless(Item.of('numismatics:crown', 1),
        ['8x numismatics:cog']
    ).id('numismatics:crown')
    
    // Crown to/from Sun (8 crowns = 1 sun)
    event.shapeless(Item.of('numismatics:crown', 8),
        ['numismatics:sun']
    ).id('numismatics:crown_from_sun')
    event.shapeless(Item.of('numismatics:sun', 1),
        ['8x numismatics:crown']
    ).id('numismatics:sun')
})