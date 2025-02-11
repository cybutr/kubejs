ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:empty_tube')
    event.recipes.create.sequenced_assembly('create:electron_tube', inter,
        [event.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
        event.recipes.createPressing(inter, inter)]).transitionalItem(inter).loops(1).id('kubejs:sequence/electron_tube')
})