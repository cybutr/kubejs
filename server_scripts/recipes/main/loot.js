LootJS.modifiers((event) => {
    // event.addEntityLootModifier("minecraft:iron_golem").replaceLoot("minecraft:iron_ingot", "tfmg:cast_iron_ingot", true);
/*     event.addLootTypeModifier(LootType.ENTITY).killedByPlayer().modifyLoot(Ingredient.all, (itemStack) => {
        itemStack.setCount(Math.round(itemStack.getCount() * 0.5));
        return itemStack;
    });
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.3).modifyLoot(Ingredient.all, (itemStack) => {
        itemStack.setCount(Math.round(itemStack.getCount() * 0.4));
        return itemStack;
    }); */
    event.addEntityLootModifier("minecraft:iron_golem")
    .matchKiller(killer => killer.type === 'minecraft:player')
    .anyStructure(["minecraft:village"], false)
    .removeLoot('minecraft:iron_ingot')
    .addWeightedLoot([3, 5], 'minecraft:iron_ingot');

    event.addEntityLootModifier("minecraft:iron_golem")
    .matchKiller(killer => killer.type === 'minecraft:player')
    .not(n => n.anyStructure(["minecraft:village"], false))
    .removeLoot('minecraft:iron_ingot')
    .addWeightedLoot([0, 2], 'tconstruct:pig_iron_ingot');

    event.addEntityLootModifier("minecraft:iron_golem")
    .not(n => n.killedByPlayer())
    .removeLoot("minecraft:iron_ingot");
});

/* LootJS.modifiers(event => {
  // Player kills: Full drops (hand or tool)
  event.addEntityLootModifier('minecraft:iron_golem')
    .matchKiller(killer => killer.type === 'minecraft:player')  // Any player kill
    .removeLoot('minecraft:poppy')
    .removeLoot('minecraft:iron_ingot')
    .addLoot('minecraft:poppy', 1)  // Guaranteed flower
    .addWeightedLoot([3, 5], 'minecraft:iron_ingot');  // 3-5 ingots

  // Everything else (lava, falls, mobs): No drops
  event.addEntityLootModifier('minecraft:iron_golem')
    .not(n => n.killedByPlayer())  // Not player damage source
    .removeLoot("minecraft:iron_ingot");  // Zero drops
}); */

/* LootJS.modifiers(event => {
  // PLAYER KILLS IN VILLAGE: Normal drops (poppy + iron)
  event.addEntityLootModifier('minecraft:iron_golem')
    .matchKiller(killer => killer.type === 'minecraft:player')
    .anyStructure(['minecraft:village'], false)  // Within village bounds
    .removeLoot('minecraft:poppy')
    .removeLoot('minecraft:iron_ingot')
    .addLoot('minecraft:poppy', 1)
    .addWeightedLoot([3, 5], 'minecraft:iron_ingot');

  // PLAYER KILLS OUTSIDE VILLAGE: Pig iron instead
  event.addEntityLootModifier('minecraft:iron_golem')
    .matchKiller(killer => killer.type === 'minecraft:player')
    .not(n => n.anyStructure(['minecraft:village'], false))  // NOT in village
    .removeLoot('minecraft:iron_ingot')
    .addWeightedLoot([3, 5], 'tconstruct:pig_iron_ingot');

  // NON-PLAYER KILLS: No drops
  event.addEntityLootModifier('minecraft:iron_golem')
    .not(n => n.killedByPlayer())
    .removeLoot("minecraft:iron_ingot");
}); */