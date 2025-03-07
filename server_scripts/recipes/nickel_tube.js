ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:empty_tube')
    event.recipes.create.sequenced_assembly('kubejs:nickel_tube', 'kubejs:empty_tube',
        [event.recipes.createDeploying(inter, [inter, 'tfmg:nickel_ingot']),
        event.recipes.createPressing(inter, inter)]).transitionalItem(inter).loops(1).id('kubejs:sequence/electron_tube')
})