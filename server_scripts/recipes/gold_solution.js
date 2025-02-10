ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:gold_solution', 240),
    [Fluid.of('create:honey', 120), Fluid.of('kubejs:crystalline_acid', 200), Item.of('minecraft:gold_nugget', 6)]).heated().id('kubejs:mixing/gold_solution')
})