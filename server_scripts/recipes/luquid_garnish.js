ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_garnish', 400), [
        'minecraft:sugar',
        '#forge:seeds',
        Fluid.water(250)
    ]).heated().id('kubejs:mixing/luquid_garnish')
})