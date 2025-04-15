ServerEvents.recipes(event => {
    let bhinter = Item.of('kubejs:drill_head')
    event.recipes.create.sequenced_assembly('create_sa:brass_drill_head', 'kubejs:drill_head',
        [event.recipes.create.deploying(bhinter, [bhinter, 'create:brass_sheet']),
        event.recipes.create.filling(bhinter, [bhinter, Fluid.of('tconstruct:molten_brass', 540)])]).transitionalItem(bhinter).loops(1).id('kubejs:sequenced_assembly/brass_drill_head')
    let peinter = Item.of('minecraft:redstone_block')
    event.recipes.create.sequenced_assembly('advancedperipherals:peripheral_casing', 'kubejs:steel_machine',
        [event.recipes.create.deploying(peinter, [peinter, 'minecraft:redstone_block']),
        event.recipes.create.filling(peinter, [peinter, Fluid.of('tconstruct:molten_copper', 450)]), 
        event.recipes.create.filling(peinter, [peinter, Fluid.of('tfmg:molten_steel', 270)]),
        event.recipes.create.deploying(peinter, [peinter, Item.of('create_dd:calculation_mechanism')]),
        event.recipes.create.pressing(peinter, peinter)]).transitionalItem(peinter).loops(1).id('kubejs:sequenced_assembly/peripheral_casing')
    let aminter = Item.of('minecraft:medium_amethyst_bud')
    event.recipes.create.sequenced_assembly('minecraft:amethyst_cluster', 'minecraft:amethyst_shard',
        [event.recipes.create.filling(aminter, [aminter, Fluid.of('sliceanddice:fertilizer', 90)]),
        event.recipes.create.filling(aminter, [aminter, Fluid.water(360)]),
        event.recipes.create.deploying(aminter, [aminter, 'minecraft:amethyst_shard'])]).transitionalItem(aminter).loops(3).id('kubejs:sequenced_assembly/amethyst_cluster')
    let t = 'minecraft:leather'
    event.recipes.createSequencedAssembly([
        'minecraft:saddle',
    ], 'minecraft:leather', [
        event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot']),
        event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot'])
    ]).transitionalItem(t).loops(1)
    
    const grasses = ['minecraft:tall_grass', 'minecraft:large_fern', 'tconstruct:earth_slime_tall_grass', 'tconstruct:sky_slime_tall_grass', 'tconstruct:blood_slime_tall_grass', 'tconstruct:ender_slime_tall_grass', 
        'minecraft:grass', 'minecraft:fern', 'tconstruct:earth_slime_fern', 'tconstruct:sky_slime_fern', 'tconstruct:blood_slime_fern', 'tconstruct:ender_slime_fern']
    grasses.forEach(t => {
        event.recipes.createSequencedAssembly([
            `2x ${t}`,
        ], t, [
            event.recipes.createFilling(t, [t, Fluid.water(500)])
        ]).transitionalItem(t).loops(2)
    })

    const trackTypes = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "stripped_bamboo",
        'cherry',
        "quark_azalea",
        "quark_ancient",
        "quark_blossom",
        "create_dd_spirit",
        "create_dd_smoked",
        "create_dd_rubber",
        "create_dd_rose",
        "ender",
        "blackstone",
        "crimson",
        "warped",
        'tileless',
        "phantom",
    ]
    
    trackTypes.forEach(wood => {
        let outputId = "railways:track_" + wood;
        event.remove({ output: outputId });
        event.remove({ output: outputId + "_narrow" });
    
        let woodId = wood;
        // Use the minecraft namespace for base wood types.
        if (["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "cherry", "mangrove", "bamboo"].includes(wood)) {
            woodId = "minecraft:" + wood;
        }
        if (["quark_azalea", "quark_ancient", "quark_blossom"].includes(wood)) {
            woodId = "quark:" + wood;
        }
        if (["create_dd_spirit", "create_dd_smoked", "create_dd_rubber", "create_dd_rose"].includes(wood)) {
            woodId = "create_dd:" + wood;
        }
    
        let count = 16;
        let nuggets = "#kubejs:anuggets";
        if (["blackstone", "crimson", "warped"].includes(wood)) {
            nuggets = "minecraft:gold_nugget";
        }
    
        let slabs = woodId + "_slab";
        if (wood === "tileless") {
            slabs = "minecraft:glass_pane";
        }
        if (wood === "phantom") {
            slabs = "minecraft:phantom_membrane";
            count = 48;
        }
        if (["quark_azalea", "quark_ancient", "quark_blossom"].includes(wood)) {
            slabs = "quark:" + wood.replace("quark_", "") + "_planks_slab";
        }
        if (["create_dd_spirit", "create_dd_smoked", "create_dd_rubber", "create_dd_rose"].includes(wood)) {
            slabs = "create_dd:" + wood.replace("create_dd_", "") + "_slab";
        }
        if (wood === "ender") {
            slabs = "minecraft:end_stone_brick_slab"
        }
        if (wood === "stripped_bamboo") {
            slabs = "minecraft:bamboo_slab"
        }
    
        let incompleteId = "railways:track_incomplete_" + wood;
        if (wood !== "create_andesite") {
            event.recipes.createSequencedAssembly([
                count + "x " + outputId
            ], slabs, [
                event.recipes.createDeploying(incompleteId, [incompleteId, nuggets]),
                event.recipes.createDeploying(incompleteId, [incompleteId, nuggets]),
                event.recipes.createPressing(incompleteId, incompleteId)
            ])
            .transitionalItem(incompleteId)
            .loops(1)
            .id("kubejs:sequenced_assembly/" + wood);
        }
        event.recipes.createSequencedAssembly([
            count + "x " + outputId + "_narrow"
        ], slabs, [
            event.recipes.createCutting(incompleteId, incompleteId),
            event.recipes.createDeploying(incompleteId, [incompleteId, nuggets]),
            event.recipes.createPressing(incompleteId, incompleteId)
        ])
        .transitionalItem(incompleteId)
        .loops(1)
        .id("kubejs:sequenced_assembly/" + wood + "_narrow");
    })

    event.remove({ output: "railways:track_monorail" })
    let c = "railways:track_incomplete_monorail"
    event.recipes.createSequencedAssembly([
        '16x railways:track_monorail'
    ], "create:metal_girder", [
        event.recipes.createDeploying(c, [c, "create:metal_bracket"]),
        event.recipes.createDeploying(c, [c, "create:iron_sheet"]),
        event.recipes.createPressing(c, c)
    ]).transitionalItem(c).loops(1).id('kubejs:sequenced_assembly/track_monorail')

    event.remove({ id: 'create:sequenced_assembly/track' })
    c = 'create:incomplete_track'
    event.recipes.createSequencedAssembly([
        '16x create:track',
    ], '#create:sleepers', [
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(c).loops(1).id('kubejs:sequenced_assembly/track')

    event.remove({ id: 'railways:sequenced_assembly/track_create_andesite_narrow' })
    c = 'railways:track_incomplete_create_andesite_narrow'
    event.recipes.createSequencedAssembly([
        '16x railways:track_create_andesite_narrow',
    ], '#create:sleepers', [
        event.recipes.createCutting(t, t),
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(c).loops(1).id('kubejs:sequenced_assembly/track_create_andesite_narrow')

    c = 'railways:incomplete_track_bamboo'
    event.recipes.createSequencedAssembly([
        '4x railways:track_bamboo',
    ], 'bamboo', [
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(c).loops(1).id('kubejs:sequenced_assembly/track_bamboo')

    c = 'railways:incomplete_track_bamboo_narrow'
    event.recipes.createSequencedAssembly([
        '4x railways:track_bamboo_narrow',
    ], 'bamboo', [
        event.recipes.createCutting(t, t),
        event.recipes.createDeploying(t, [t, '#kubejs:anuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(c).loops(1).id('kubejs:sequenced_assembly/track_bamboo_narrow')
})