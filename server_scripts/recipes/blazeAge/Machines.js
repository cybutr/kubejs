ServerEvents.recipes(event => {
    event.shaped(
        Item.of("tconstruct:smeltery_controller"),
        [
            " A ",
            "BCB",
            "DDD"
        ],
        {
            A: "create_things_and_misc:vibration_mechanism",
            B: "minecraft:copper_ingot",
            C: "kubejs:blazing_machine",
            D: "tconstruct:seared_brick"
        }
    ).id('kubejs:shaped/smeltery_controller'),
    event.shaped(
        Item.of("tconstruct:foundry_controller"),
        [
            "BAB",
            "BCB",
            "DDD"
        ],
        {
            A: "create_dd:infernal_mechanism",
            B: "minecraft:obsidian",
            C: "kubejs:blazing_machine",
            D: "tconstruct:scorched_brick"
    }).id('kubejs:shaped/foundry_controller'),
    event.shaped(
        Item.of("tconstruct:seared_drain"),
        [
            "   ",
            "BCB",
            "   "
        ],
        {
            
            B: "minecraft:copper_ingot",
            C: "kubejs:blazing_machine",
            
        }
    ).id('kubejs:shaped/seared_drain'),
    event.shaped(
        Item.of("tconstruct:seared_duct"),
        [
            "   ",
            "BCB",
            "   "
        ],
        {
            
            B: "minecraft:gold_ingot",
            C: "kubejs:blazing_machine",
            
        }
    ).id('kubejs:shaped/seared_duct'),
    event.shaped(
        Item.of("tconstruct:seared_chute"),
        [
            " B ",
            " C ",
            " B "
        ],
        {
            
            B: "minecraft:copper_ingot",
            C: "kubejs:blazing_machine",
            
        }
    ).id('kubejs:shaped/seared_chute'),
    event.shaped(
        Item.of("tconstruct:scorched_drain"),
        [
            "AAA",
            "BCB",
            "AAA"
        ],
        {
            A: "tconstruct:scorched_brick",
            B: "tconstruct:obsidian_pane",
            C: "kubejs:blazing_machine",
            
        }
    ).id('kubejs:shaped/scorched_drain'),
    event.shaped(
        Item.of("tconstruct:scorched_duct"),
        [
            "AAA",
            "BCB",
            "AAA"
        ],
        {
            A: "tconstruct:scorched_brick",
            B: "minecraft:gold_ingot",
            C: "kubejs:blazing_machine",
            
        }).id('kubejs:shaped/scorched_duct'),
    event.shaped(
        Item.of("tconstruct:scorched_chute"),
        [
            "ABA",
            "ACA",
            "ABA"
        ],
        {
            A: "tconstruct:scorched_brick",
            B: "minecraft:gold_ingot",
            C: "kubejs:blazing_machine",
            
        }
    ).id('kubejs:shaped/scorched_chute')
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    event.shaped(
        Item.of('create:track_station', 2),
        [
            ' C ',
            ' B ',
            ' A '
        ],
        {
            A: 'create:railway_casing',
            B: 'kubejs:blazing_machine',
            C: 'compass'
        }
    ).id('kubejs:shaped/track_station')
    event.shaped(
        Item.of('create:controls'),
        [
            ' C ',
            'IBP',
            ' A '
        ],
        {
            A: 'create:railway_casing',
            B: 'kubejs:blazing_machine',
            C: 'create:contraption_controls',
            I: 'create_dd:integrated_mechanism',
            P: 'create:precision_mechanism'
        }
    ).id('kubejs:shaped/train_controls')

})