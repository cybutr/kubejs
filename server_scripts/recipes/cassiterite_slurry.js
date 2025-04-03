ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:cassiterite_slurry', 810), ['3x create_dd:tin_nugget', 'minecraft:stone', Fluid.of('tfmg:sulfuric_acid', 180), Fluid.of('kubejs:crystalline_acid', 135)]).id('kubejs:mixing/cassiterite_slurry')
})