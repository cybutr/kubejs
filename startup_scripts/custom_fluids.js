StartupEvents.registry('fluid', event => {
    event.create('liquid_garnish')
    .thinTexture(0xbed3c2)
    .bucketColor(0xbed3c2)
    .displayName('Garnish')
    .noBucket()
    .noBlock()

    event.create('zinc_solution')
    .thinTexture(0xc8e1cd)
    .bucketColor(0xc8e1cd)
    .displayName('Zinc Solution')
    .noBucket()
    .noBlock()

    event.create('gold_solution')
    .thinTexture(0xc8e1cd)
    .bucketColor(0xc8e1cd)
    .displayName('Gold Solution')
    .noBucket()
    .noBlock()

    event.create('sulfuric_solution')
    .thinTexture(0xc9efa1)
    .bucketColor(0xc9efa1)
    .displayName('Sulfuric Solution')
    .noBucket()
    .noBlock()

    event.create('crystalline_acid')
    .thinTexture(0x9ccfda)
    .bucketColor(0x9ccfda)
    .displayName('Crystalline Acid')
    .noBucket()
    .noBlock()

    event.create('nitrogen')
    .thinTexture(0xe6ebee)
    .bucketColor(0xe6ebee)
    .displayName('Nitrogen')
    .noBucket()
    .noBlock()

    event.create('purified_water')
    .thinTexture(0x82bfde)
    .bucketColor(0x82bfde)
    .displayName('Purified Water').flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still').tag('minecraft:water')
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/purified_water_bucket"
        }
    })

    event.create('enriched_water')
    .thinTexture(0xd2e1e3)
    .bucketColor(0xd2e1e3)
    .displayName('Enriched Water').flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still').tag('minecraft:water')
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/enriched_water_bucket"
        }
    })

    event.create('glow_solution')
    .thinTexture(0xfaf478)
    .bucketColor(0xfaf478)
    .displayName('Glow Solution').flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still').tag('minecraft:lava')
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/glow_solution_bucket"
        }
    })

    event.create('volcanic_acid')
    .thinTexture(0xf2acb9)
    .bucketColor(0xf2acb9)
    .displayName('Volcanic Acid')
    .noBucket()
    .noBlock()

    event.create('molten_redstone')
    .thinTexture(0xe74f4f)
    .bucketColor(0xe74f4f)
    .displayName('Molten Redstone')
    .noBlock()
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/molten_redstone_bucket"
        }
    })

    event.create('bauxite_slurry')
    .thinTexture(0xc17f59)
    .bucketColor(0xc17f59)
    .displayName('Bauxite Slurry')
    .noBucket()
    .noBlock()

    event.create('caustic_solution')
    .thinTexture(0xe3d5b8)
    .bucketColor(0xe3d5b8)
    .displayName('Caustic Solution')
    .noBucket()
    .noBlock()

    event.create('zinc_chloride')
    .thinTexture(0xd4d6d8)
    .bucketColor(0xd4d6d8)
    .displayName('Zinc Chloride')
    .noBucket()
    .noBlock()

    event.create('stabilizing_agent')
    .thinTexture(0xe3d5b8)
    .bucketColor(0xe3d5b8)
    .displayName('Stabilizing Agent')
    .noBucket()
    .noBlock()

    event.create('cassiterite_slurry')
    .thinTexture(0xc9adad)
    .bucketColor(0xc9adad)
    .displayName('Cassiterite Slurry')
    .noBucket()
    .noBlock()

    event.create('tin_slurry')
    .thinTexture(0xaabcbc)
    .bucketColor(0xaabcbc)
    .displayName('Tin Slurry')
    .noBucket()
    .noBlock()

    event.create('malachite_solution')
    .thinTexture(0xb9a56e)
    .bucketColor(0xb9a56e)
    .displayName('Malachite Solution')
    .noBucket()
    .noBlock()

    event.create('azurite_acid')
    .thinTexture(0x6391b0)
    .bucketColor(0x6391b0)
    .displayName('Azurite Acid')
    .noBucket()
    .noBlock()
})
