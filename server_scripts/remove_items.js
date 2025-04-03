let bannedItems = [
  'minecraft:elytra'
]
bannedItems.forEach(item => {
  PlayerEvents.inventoryChanged(item, event => {
    event.player.tell([
        "Item ",
        Text.yellow(item),
        " has been ",
        Text.red("removed"),
      ]);
    event.player.inventory.removeItem(event.getSlot(), event.item.count)
    event.player.inventory.clear(item);
  })
})
