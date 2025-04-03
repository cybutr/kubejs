//feel free to add more based on needs
const blacklistedTorches = [
'minecraft:redstone_torch'
];
const activeBlocks = [
    'minecraft:cobweb'
];

activeBlocks.forEach(blockId => {
    BlockEvents.leftClicked(blockId, event => {
        const { player, block, item } = event;

        if (item.id.endsWith('torch') && !blacklistedTorches.includes(item.id) && !player.crouching) {
            block.set('minecraft:air');

            event.server.runCommandSilent(`playsound minecraft:block.wool.break block @a ${block.x} ${block.y} ${block.z}`);

            event.server.runCommandSilent(`particle minecraft:smoke ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} 0.2 0.2 0.2 0.05 10`);

            event.cancel();
        }
    });
});