ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('tfmg:copper_sulfate'),
    [Item.of('minecraft:copper_ingot'), Fluid.of('tfmg:sulfuric_acid', 200), Fluid.water(200)]).id('kubejs:pressurizing/copper_sulfate')
})