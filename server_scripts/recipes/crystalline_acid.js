ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:crystalline_acid', 450),
    [Item.of('minecraft:glowstone_dust', 2), Item.of('minecraft:redstone', 1), Fluid.of('tfmg:sulfuric_acid', 200)]).id('kubejs:mixing/crystalline_acid')
})