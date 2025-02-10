let bannedItems = [['minecraft:elytra', "Too OP"]];
bannedItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    event.player.tell([
        "Item ",
        Text.yellow(pair[0]),
        " has been ",
        Text.red("removed"),
        ".\nReason: ",
        Text.red(pair[1]),
      ]);
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  })
})
