ServerEvents.recipes(event => {
    event.recipes.create.deploying(
        Item.of('constructionwand:iron_wand', 1),
        [Item.of('minecraft:iron_ingot', 1), Item.of('constructionwand:stone_wand', 1)]
    ).id('kubejs:deploying/iron_wand')
    event.recipes.create.filling(
        Item.of('constructionwand:diamond_wand', 1),
        [Fluid.of('tconstruct:molten_diamond', 270), Item.of('constructionwand:iron_wand', 1)]
    ).id('kubejs:deploying/diamond_wand')
})