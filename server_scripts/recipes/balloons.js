ServerEvents.recipes(event => {
    let inter = Item.of('minecraft:phantom_membrane')
    event.recipes.create.sequenced_assembly(
        Item.of('vs_eureka:balloon', 4),
        Item.of('minecraft:phantom_membrane'),
        [event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createDeploying(inter, [inter, '#kubejs:balloon_mat']),
        event.recipes.createPressing(inter, inter)]).transitionalItem(inter).loops(1).id('kubejs:sequence/balloon')
})