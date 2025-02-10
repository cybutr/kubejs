ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.pressurizing(Item.of('tfmg:zinc_sulfate'),
    [Item.of('create:zinc_ingot'), Fluid.of('tfmg:sulfuric_acid', 200), Fluid.water(200)]).id('kubejs:pressurizing/zinc_sulfate')
})