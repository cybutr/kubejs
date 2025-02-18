ServerEvents.tags('item', event => {
    event.add('kubejs:anuggets', ['minecraft:iron_nugget', 'create:zinc_nugget'])
    event.add('kubejs:aingots', ['minecraft:iron_ingot', 'create:zinc_ingot'])
    event.add('forge:saws', 'kubejs:saw')
    event.add('forge:screwdrivers', ['kubejs:screwdriver', 'tfmg:screwdriver'])
    event.remove('forge:ingots/steel', ['create_dd:steel_ingot'])
})