ServerEvents.recipes(event => {
    event.recipes.create.mixing(
    Fluid.of('kubejs:zinc_solution', 200),
    [Fluid.of('kubejs:crystalline_acid', 100), Item.of('create:zinc_nugget', 6)]).heated().id('kubejs:mixing/zinc_solution')
})