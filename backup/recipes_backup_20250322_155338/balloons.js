ServerEvents.recipes(event => {
    let inter = Item.of('minecraft:phantom_membrane')
    event.recipes.create.sequenced_assembly(
        Item.of('vs_tournament:balloon_unpowered', 4),
        Item.of('minecraft:phantom_membrane'),
        [event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createPressing(inter, inter)]).transitionalItem(inter).loops(1).id('kubejs:sequence/balloon')
/*     event.recipes.create.item_application(Item.of('vs_tournament:balloon', 1), 'vs_tournament:balloon_unpowered', 'minecraft:redstone').id('kubejs:item_application/power_balloon') */
    event.recipes.create.deploying(Item.of('vs_tournament:balloon', 1), ['vs_tournament:balloon_unpowered', 'minecraft:redstone']).id('kubejs:deploying/power_balloon')
/*     event.recipes.create.item_application(Item.of('vs_tournament:floater', 1), 'vs_tournament:balloon_unpowered', 'vs_clockwork:ballast').id('kubejs:item_application/floater') */
    event.recipes.create.deploying(Item.of('vs_tournament:floater', 1), ['vs_tournament:balloon_unpowered', 'vs_clockwork:ballast']).id('kubejs:deploying/floater')
})