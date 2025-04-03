ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('tfmg:copper_sulfate'),
    [Item.of('minecraft:copper_ingot'), Fluid.of('tfmg:sulfuric_acid', 180), Fluid.water(180)]).id('kubejs:pressurizing/copper_sulfate')
})