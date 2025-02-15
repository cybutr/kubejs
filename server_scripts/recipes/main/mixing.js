ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('tfmg:propane', 1000), [Fluid.of('tfmg:kerosene', 500), Fluid.of('tfmg:gasoline', 350), Fluid.of('tfmg:naphtha', 150)]).id('kubejs:mixing/propane')
})