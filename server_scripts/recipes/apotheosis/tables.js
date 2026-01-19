ServerEvents.recipes(event => {
    // 1. Simple Reforging Table
    // start with enchant table -> deploy rare material 2x -> press
    let srt_inter = 'apotheosis:simple_reforging_table' // Using standard table as base for "Simple" rename/logic
    event.recipes.create.sequenced_assembly(
        'apotheosis:simple_reforging_table',
        'minecraft:enchanting_table',
        [
            event.recipes.create.deploying(srt_inter, [srt_inter, 'apotheosis:rare_material']),
            event.recipes.create.deploying(srt_inter, [srt_inter, 'apotheosis:rare_material']),
            event.recipes.create.pressing(srt_inter, srt_inter)
        ]
    ).transitionalItem(srt_inter).loops(1).id('kubejs:sequenced_assembly/simple_reforging_table')

    // 2. Reforging Table
    // start with simple reforging station -> deploy epic material 2x -> press -> deploy netherite ingot -> spout hyper experience -> press
    let rt_inter = 'apotheosis:reforging_table'
    event.recipes.create.sequenced_assembly(
        'apotheosis:reforging_table',
        'apotheosis:simple_reforging_table',
        [
            event.recipes.create.deploying(rt_inter, [rt_inter, 'apotheosis:epic_material']),
            event.recipes.create.deploying(rt_inter, [rt_inter, 'apotheosis:epic_material']),
            event.recipes.create.pressing(rt_inter, rt_inter),
            event.recipes.create.deploying(rt_inter, [rt_inter, 'minecraft:netherite_ingot']),
            event.recipes.create.filling(rt_inter, [rt_inter, Fluid.of('create_enchantment_industry:hyper_experience', 1000)]),
            event.recipes.create.pressing(rt_inter, rt_inter)
        ]
    ).transitionalItem(rt_inter).loops(1).id('kubejs:sequenced_assembly/reforging_table')

    // 3. Augmentation Table
    // start with enchanting table -> deploy mythic material 2x -> deploy nether star -> press -> deploy netherite ingot -> spout hyper experience -> press
    let at_inter = 'apotheosis:augmenting_table'
    event.recipes.create.sequenced_assembly(
        'apotheosis:augmenting_table',
        'minecraft:enchanting_table',
        [
            event.recipes.create.deploying(at_inter, [at_inter, 'apotheosis:mythic_material']),
            event.recipes.create.deploying(at_inter, [at_inter, 'apotheosis:mythic_material']),
            event.recipes.create.deploying(at_inter, [at_inter, 'minecraft:nether_star']),
            event.recipes.create.pressing(at_inter, at_inter),
            event.recipes.create.deploying(at_inter, [at_inter, 'minecraft:netherite_ingot']),
            event.recipes.create.filling(at_inter, [at_inter, Fluid.of('create_enchantment_industry:hyper_experience', 1000)]),
            event.recipes.create.pressing(at_inter, at_inter)
        ]
    ).transitionalItem(at_inter).loops(1).id('kubejs:sequenced_assembly/augmenting_table')
})