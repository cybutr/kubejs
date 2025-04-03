ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_garnish', 360), [
        'minecraft:sugar',
        '#forge:seeds',
        Fluid.water(270)
    ]).heated().id('kubejs:mixing/luquid_garnish')
})