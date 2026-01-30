ServerEvents.recipes(event => {
  event.recipes.createSplashing(Item.of("minecraft:exposed_copper"), Item.of("minecraft:copper_block"))
  event.recipes.createSplashing(Item.of("minecraft:weathered_copper"), Item.of("minecraft:exposed_copper"))
  event.recipes.createSplashing(Item.of("minecraft:oxidized_copper"), Item.of("minecraft:weathered_copper"))
})