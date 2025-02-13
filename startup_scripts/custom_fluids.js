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
    .displayName('Purified Water')
    .noBlock()
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/purified_water_bucket"
        }
    })

    event.create('enriched_water')
    .thinTexture(0xd2e1e3)
    .bucketColor(0xd2e1e3)
    .displayName('Enriched Water')
    .noBlock()
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/enriched_water_bucket"
        }
    })

    event.create('glow_solution')
    .thinTexture(0xfaf478)
    .bucketColor(0xfaf478)
    .displayName('Glow Solution')
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

    event.create('skibidi_fluid')
    .thinTexture(0x9650f)
    .bucketColor(0x9650f)
    .displayName('Skibidi Fluid')
    .noBucket()

    event.create('cum')
    .thinTexture(0xececd8)
    .bucketColor(0xececd8)
    .displayName('Cum')
    .noBlock()
    .bucketItem.modelJson({
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "kubejs:item/cum_bucket"
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
})
