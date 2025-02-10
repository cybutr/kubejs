ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:enriched_water', 200), [Fluid.of('kubejs:purified_water', 300), Fluid.of('create:honey', 125), Item.of('minecraft:redstone', 3)]).heated().id('kubejs:mixing/enriched_water')
})