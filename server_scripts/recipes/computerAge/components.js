ServerEvents.recipes(event => {
    let binter = Item.of('tfmg:aluminum_ingot')
    event.recipes.create.sequenced_assembly('tfmg:lithium_charge', 'tfmg:aluminum_ingot',
        [event.recipes.create.deploying(binter, [binter, 'tfmg:bottle_of_battery_acid']),
        event.recipes.create.deploying(binter, [binter, 'tfmg:lithium_ingot']),
        event.recipes.create.deploying(binter, [binter, 'tfmg:plastic_sheet']),
        event.recipes.create.pressing(binter, binter)]).transitionalItem(binter).loops(1).id('kubejs:sequenced_assembly/lithium_charge')

    event.recipes.create.mechanical_crafting('kubejs:motherboard', [
        ' TNT ',
        'RWCGR',
        'BBCBB'
    ], {
        T: 'create:electron_tube',
        R: 'tfmg:resistor_',
        W: 'createaddition:copper_wire',
        C: 'tfmg:capacitor_',
        G: 'createaddition:gold_wire',
        B: 'create:copper_sheet',
        N: 'create:nixie_tube'
    }).id('kubejs:mechanical_crafting/motherboard')

    event.recipes.create.mechanical_crafting('kubejs:hard_drive', [
        ' ICI ',
        'RMLR ',
        ' S S '
    ], {
        I: 'create:iron_sheet',  
        C: 'createaddition:copper_wire',       
        R: 'create:copper_nugget',    
        M: 'computercraft:disk',  
        S: 'minecraft:smooth_stone_slab',
        L: 'create_dd:inductive_mechanism'
    }).id('kubejs:mechanical_crafting/hard_drive')

    event.recipes.create.mechanical_crafting('kubejs:graphics_unit', [
        ' GFR ',
        'CLNTC',
        ' SFS '
    ], {
        G: 'create:gold_sheet',       
        R: 'createaddition:copper_rod',       
        C: 'tfmg:capacitor_',        
        T: 'create:electron_tube',     
        N: 'kubejs:nickel_tube',      
        S: 'createnuclear:graphene' ,
        F: 'tfmg:fuse',
        L: 'minecraft:amethyst_shard'
    })
})