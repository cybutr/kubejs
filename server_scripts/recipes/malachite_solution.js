ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:malachite_solution', 360), ['12x create:copper_nugget', Fluid.of('kubejs:crystalline_acid', 90), Fluid.water(180)]).heated().id('kubejs:mixing/malachite_solution')
})