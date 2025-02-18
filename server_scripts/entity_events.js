EntityEvents.death("player", (event) => {
    const { player } = event;
    if (Math.random() < 0.3) {
        player.block.popItem(Item.playerHead(player.username))
    }
});