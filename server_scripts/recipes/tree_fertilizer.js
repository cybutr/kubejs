ServerEvents.recipes(event => {
    event.recipes.create.mixing(["create:tree_fertilizer"], ["#minecraft:saplings", Fluid.of("tconstruct:earth_slime", 250)]).id("kubejs:mixing/tree_fertilizer")
    
})