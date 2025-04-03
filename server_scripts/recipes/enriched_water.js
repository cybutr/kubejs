ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:enriched_water', 180), [Fluid.of('kubejs:purified_water', 270), Fluid.of('create:honey', 135), Item.of('minecraft:redstone', 3)]).heated().id('kubejs:mixing/enriched_water')
})