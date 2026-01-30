ServerEvents.recipes(event => {
    event.smelting('minecraft:lime_dye', 'minecraft:sugar_cane').xp(0.1).id('kubejs:smelting/lime_dye')
    event.smelting('minecraft:obsidian', 'create:powdered_obsidian')
})