ServerEvents.recipes(event => {
    let inter = Item.of('tfmg:unfinished_steel_mechanism')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('tfmg:steel_mechanism'),
            Item.of('tfmg:heavy_plate').withChance(0.08),
            Item.of('tfmg:steel_ingot').withChance(0.08),
            Item.of('tfmg:aluminum_ingot').withChance(0.05),
            Item.of('tfmg:industrial_pipe').withChance(0.03)
        ],
        Item.of('tfmg:heavy_plate'),
        [
            event.recipes.create.deploying(inter, [inter, Ingredient.of('#forge:ingots/steel')]),
            event.recipes.create.deploying(inter, [inter, Ingredient.of('#forge:ingots/aluminum')]),
            event.recipes.create.deploying(inter, [inter, 'tfmg:screw']),
            event.recipes.create.deploying(inter, [inter, '#forge:screwdrivers'])
        ]
    ).transitionalItem(inter)
    .loops(1)
    .id('kubejs:sequence/steel_mechanism')

    // Turbine Engine Recipe
    let interTurbine = Item.of('tfmg:unfinished_turbine_engine')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('tfmg:turbine_engine', 2)
        ],
        Ingredient.of('tfmg:engine_base'),
        [
            event.recipes.create.deploying(interTurbine, [interTurbine, Ingredient.of('tfmg:turbine_blade')]),
            event.recipes.create.deploying(interTurbine, [interTurbine, Ingredient.of('tfmg:screw')]),
            event.recipes.create.deploying(interTurbine, [interTurbine, Ingredient.of('#forge:screwdrivers')]),
            event.recipes.create.filling(interTurbine, [interTurbine, Fluid.of('tfmg:lubrication_oil', 1000)]),
            event.recipes.create.deploying(interTurbine, [interTurbine, Ingredient.of('tfmg:steel_mechanism')])
        ]
    )
    .transitionalItem(interTurbine)
    .loops(6)
    .id('kubejs:sequence/turbine_engine')

    // LPG Engine Recipe
    let interLpg = Item.of('tfmg:unfinished_lpg_engine')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('tfmg:lpg_engine', 2)
        ],
        Ingredient.of('tfmg:engine_base'),
        [
            event.recipes.create.deploying(interLpg, [interLpg, Ingredient.of('tfmg:engine_chamber')]),
            event.recipes.create.deploying(interLpg, [interLpg, Ingredient.of('tfmg:screw')]),
            event.recipes.create.deploying(interLpg, [interLpg, Ingredient.of('#forge:screwdrivers')]),
            event.recipes.create.filling(interLpg, [interLpg, Fluid.of('tfmg:lubrication_oil', 1000)])
        ]
    )
    .transitionalItem(interLpg)
    .loops(8)
    .id('kubejs:sequence/lpg_engine')

    // Gasoline Engine Recipe
    let interGas = Item.of('tfmg:unfinished_gasoline_engine')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('tfmg:gasoline_engine', 2)
        ],
        Ingredient.of('tfmg:engine_base'),
        [
            event.recipes.create.filling(interGas, [interGas, Fluid.of('tfmg:lubrication_oil', 1000)]),
            event.recipes.create.deploying(interGas, [interGas, Ingredient.of('tfmg:engine_chamber')]),
            event.recipes.create.deploying(interGas, [interGas, Ingredient.of('tfmg:screw')]),
            event.recipes.create.deploying(interGas, [interGas, Ingredient.of('#forge:screwdrivers')])
        ]
    )
    .transitionalItem(interGas)
    .loops(8)
    .id('kubejs:sequence/gasoline_engine')
})
