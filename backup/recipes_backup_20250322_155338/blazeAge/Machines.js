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
    ),
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
        }),
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
        ),
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
        ),
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
        ),
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
        ),
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
                
            }),
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
            )
        

        
    

})