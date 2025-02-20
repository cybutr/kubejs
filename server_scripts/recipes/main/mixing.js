ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('tfmg:propane', 1000), [Fluid.of('tfmg:kerosene', 500), Fluid.of('tfmg:gasoline', 350), Fluid.of('tfmg:naphtha', 150)]).id('kubejs:mixing/propane')
    event.recipes.create.mixing('create_dd:mithril_ingot', [Item.of('create:experience_nugget', 4), 'tfmg:steel_ingot', 'create_dd:bronze_ingot', 'create_dd:chromatic_compound']).superheated().id('kubejs:mixing/mithril_ingot')
    event.recipes.create.mixing('2x minecraft:tuff', [Fluid.lava(90), '2x gravel', '2x kubejs:crushed_deepslate']).id('kubejs:mixing/tuff')
})