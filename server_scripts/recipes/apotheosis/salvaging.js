// priority: 0
console.info('Loaded crushingsalvage.js!')

//LootCatergory to check the if the item should have a crushing recipe.
const $LootCategory = Java.loadClass("dev.shadowsoffire.apotheosis.adventure.loot.LootCategory");

ServerEvents.recipes(event => {
    /*
    Now, you may be wondering, since this is 1.19+, couldn't I have used forEachRecipe instead, since Apotheosis made salvaging data-driven?
    Well, yes, and it'd probably be more performant, actually. But the code already worked, so I decided I'd work with it.
   
    Huge thanks to @unknownrj on the latvian.dev discord! 1.19+ port by AtobaAzul
    */

    Ingredient.all.stacks.forEach( //Iterates over all ingredient items.
        /** @arg {Internal.ItemStackJS} stack*/
        (stack) => {
            if ($LootCategory.forItem(stack) == $LootCategory.NONE) return; //if they're not in any propper loot catergory (that can have affixes), skip it.
            //begin recipes
            event.custom({
                type: "create:crushing",
                ingredients: [
                    stack.withNBT({
                        affix_data: {
                            rarity: "apotheosis:common"
                        }
                    }).weakNBT().toJson() //item with the correct NBT as input.
                ],
                processingTime: 150, //"default processing time"
                results: [{
                    count: 1,
                    item: "apotheosis:common_material" //main loot
                },
                //extra, chance loot.
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:common_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:common_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:common_material"
                },
                ]
            })

            event.custom({
                type: "create:crushing",
                ingredients: [

                    stack.withNBT({
                        affix_data: {
                            rarity: "apotheosis:uncommon"
                        }
                    }).weakNBT().toJson()

                ],
                processingTime: 150,
                results: [{
                    count: 1,
                    item: "apotheosis:uncommon_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:uncommon_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:uncommon_material"
                },

                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:uncommon_material"
                },



                ]
            })

            event.custom({
                type: "create:crushing",
                ingredients: [

                    stack.withNBT({
                        affix_data: {
                            rarity: "apotheosis:rare"
                        }
                    }).weakNBT()

                ],
                processingTime: 150,
                results: [{
                    count: 1,
                    item: "apotheosis:rare_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:rare_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:rare_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:rare_material"
                },




                ]
            })
            event.custom({
                type: "create:crushing",
                ingredients: [

                    stack.withNBT({
                        affix_data: {
                            rarity: "apotheosis:epic"
                        }
                    }).weakNBT()

                ],
                processingTime: 150,
                results: [{
                    count: 1,
                    item: "apotheosis:epic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:epic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:epic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:epic_material"
                },



                ]
            })

            event.custom({
                type: "create:crushing",
                ingredients: [

                    stack.withNBT({
                        affix_data: {
                            rarity: "apotheosis:mythic"
                        }
                    }).weakNBT()

                ],
                processingTime: 150,
                results: [{
                    count: 1,
                    item: "apotheosis:mythic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:mythic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:mythic_material"
                },
                {
                    count: 1,
                    chance: 0.5,
                    item: "apotheosis:mythic_material"
                },


                ]
            })
        }
    )

    //gem crushing

    //define gem defs here
    //just so we don't have to manually do each recipe.
    let gemsDefs = {
        common: {
            dust: 1,
            chance: 1
        },
        uncommon: {
            dust: 1,
            chance: 2
        },
        rare: {
            dust: 2,
            chance: 2
        },
        epic: {
            dust: 2,
            chance: 3
        },
        mythic: {
            dust: 3,
            chance: 3
        },
        ancient: {
            dust: 4,
            chance: 6
        },
    }

    for (const key in gemsDefs) {
        let _results = [ //local helper variable for the results 
            {
                item: "apotheosis:gem_dust",
                count: gemsDefs[key].dust //get the dust count from the defs object
            },
        ]

        //adds the additional chance loot to the _results array
        for (let count = 0; count < gemsDefs[key].chance; count++) {
            _results.push({
                item: "apotheosis:gem_dust",
                chance: 0.5
            })

        }

        //then add the recipe
        event.custom({
            type: "create:crushing",
            ingredients: [
                Item.of('apotheosis:gem').withNBT({
                    affix_data: {
                        rarity: "apotheosis:" + key
                    }
                }).weakNBT().toJson(),
            ],
            processingTime: 150,
            results: _results
        })

    }


    //and finally, remove the default salvaging recipes.
    event.remove({ type: 'apotheosis:salvaging' })
    event.remove({ output: 'apotheosis:salvaging_table' })
})