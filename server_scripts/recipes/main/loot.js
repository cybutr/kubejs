LootJS.modifiers((event) => {
    
    // VARIABLES
    const CONFIG = {
        village:  { item: 'minecraft:iron_ingot',        min: 3, max: 5 },
        wild:     { item: 'tconstruct:pig_iron_ingot',   min: 0, max: 1 },
        deployer: { item: 'tconstruct:pig_iron_nugget',  min: 1, max: 4 }
    };

    // 1. REMOVE DEFAULT LOOT
    // Applies to all Iron Golems
    event.addEntityLootModifier("minecraft:iron_golem")
        .removeLoot(Ingredient.all);

    // 2. DEPLOYER DROP (Fake Player)
    // Checks if the Golem has the "KilledByFake" tag we set in the other script
    event.addEntityLootModifier("minecraft:iron_golem")
        .killedByPlayer()
        .entityPredicate(entity => {
            return entity.persistentData.contains('KilledByFake');
        })
        .addWeightedLoot([CONFIG.deployer.min, CONFIG.deployer.max], CONFIG.deployer.item);

    // 3. VILLAGE DROP (Real Player ONLY)
    // Checks for Player + Inside Village + NO Fake Tag
    event.addEntityLootModifier("minecraft:iron_golem")
        .killedByPlayer()
        .entityPredicate(entity => {
            return !entity.persistentData.contains('KilledByFake'); // Must NOT be fake
        })
        .anyStructure("#minecraft:village", false)
        .addWeightedLoot([CONFIG.village.min, CONFIG.village.max], CONFIG.village.item);

    // 4. WILD DROP (Real Player ONLY)
    // Checks for Player + Outside Village + NO Fake Tag
    event.addEntityLootModifier("minecraft:iron_golem")
        .killedByPlayer()
        .entityPredicate(entity => {
            return !entity.persistentData.contains('KilledByFake'); // Must NOT be fake
        })
        .not(c => c.anyStructure("#minecraft:village", false)) // Not in village
        .addWeightedLoot([CONFIG.wild.min, CONFIG.wild.max], CONFIG.wild.item);
});