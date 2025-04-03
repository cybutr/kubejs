ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:azurite_acid', 270), [Item.of('minecraft:lapis_lazuli', 2), Fluid.of('tfmg:sulfuric_acid', 90), Fluid.water(135)]).id('kubejs:mixing/azurite_solution')
})