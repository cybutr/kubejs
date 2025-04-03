ServerEvents.recipes(event => {
    let inter = Item.of('vs_clockwork:incomplete_wanderwand')
    event.recipes.create.sequenced_assembly(
        'vs_clockwork:incomplete_wanderwand',
        'createaddition:brass_rod',
        [
            event.recipes.createDeploying(inter, [inter, 'create_dd:bronze_nugget']),
            event.recipes.createDeploying(inter, [inter, 'create_dd:bronze_nugget']),
            event.recipes.createDeploying(inter, [inter, 'kubejs:nickel_tube']),
            event.recipes.createPressing(inter, inter)
        ]
    ).transitionalItem(inter).loops(3).id('kubejs:sequence/incomplete_wanderwand')
})