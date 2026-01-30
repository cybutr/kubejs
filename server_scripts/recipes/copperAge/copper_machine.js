ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:copper_machine')
    let inter2 = Item.of('kubejs:incomplete_copper_machine')
    event.recipes.create.sequenced_assembly(Item.of('kubejs:copper_machine', 2), 'kubejs:andesite_machine', 
        [event.recipes.createDeploying(inter2, [inter2, 'minecraft:gold_nugget']),
        event.recipes.createCutting(inter2, inter2),
        event.recipes.createDeploying(inter2, [inter2, '#create:valve_handles']),
        event.recipes.createDeploying(inter2, [inter2, '#forge:screwdrivers']),
        event.recipes.createPressing(inter, inter)
        ]).transitionalItem(inter2).loops(1).id('kubejs:sequence/copper_machine')
})