ServerEvents.tags('item', event => {
    event.add('kubejs:anuggets', ['minecraft:iron_nugget', 'create:zinc_nugget'])
    event.add('kubejs:aingots', ['minecraft:iron_ingot', 'create:zinc_ingot'])
    event.add('kubejs:balloon_mat', ['minecraft:leather', 'minecraft:paper', 'tfmg:synthetic_leather'])
    event.add('forge:saws', 'kubejs:saw')
    event.add('forge:screwdrivers', ['kubejs:screwdriver', 'tfmg:screwdriver'])
    event.remove('forge:ingots/steel', ['create_dd:steel_ingot', 'createnuclear:steel_ingot', 'tconstruct:steel_ingot'])
    event.remove('forge:ingots/lead', 'createnuclear:lead_ingot')
    event.add('forge:rope', 'brewery:rope')
    event.add('forge:storage_blocks/aluminium', 'tfmg:aluminum_block')
    event.add('forge:ingots/bronze', 'create_dd:bronze_ingot')
    event.add('forge:ingots/mythril', 'create_dd:mithril_ingot')
    event.add('forge:gems/large_amethyst', 'minecraft:amethyst_shard')
    event.remove('forge:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.remove('c:nuggets/steel', ['createnuclear:steel_nugget', 'tconstruct:steel_nugget'])
    event.remove('createbigcannons:sheet_steel', 'create_dd:sheet_steel')
    event.removeAllTagsFrom(['createbigcannons:cast_iron_ingot', 'createdeco:industrial_iron_ingot', 'createnuclear:steel_nugget', 'tconstruct:steel_nugget', 'create_dd:sheet_steel', 
        'createbigcannons:steel_block', 'tconstruct:steel_block', 'createbigcannons:molten_steel', 'tconstruct:molten_steel'])
})
ServerEvents.tags('blocks', event => {
    event.remove('createbigcannons:block_steel', ['createbigcannons:steel_block', 'tconstruct:steel_block', 'createbigcannons:molten_bronze'])
})
ServerEvents.tags('fluids', event => {
    event.remove('forge:molten_bronze', 'createbigcannons:molten_bronze')
    event.remove('forge:molten_steel', ['createbigcannons:molten_steel', 'tconstruct:molten_steel'])
})