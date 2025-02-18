ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:cassiterite_slurry', 780), ['3x create_dd:tin_nugget', 'minecraft:stone', Fluid.of('tfmg:sulfuric_acid', 220), Fluid.of('kubejs:crystalline_acid', 120)]).id('kubejs:mixing/cassiterite_slurry')
})