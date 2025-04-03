ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:gold_solution', 270),
    [Fluid.of('create:honey', 100), Fluid.of('kubejs:crystalline_acid', 180), Item.of('minecraft:gold_nugget', 6)]).heated().id('kubejs:mixing/gold_solution')
})