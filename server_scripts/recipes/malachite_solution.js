ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:malachite_solution', 380), ['12x create:copper_nugget', Fluid.of('kubejs:crystalline_acid', 110), Fluid.water(200)]).heated().id('kubejs:mixing/malachite_solution')
})