ServerEvents.recipes(event => {
    let inter = Item.of('kubejs:copper_machine')
    let inter2 = Item.of('kubejs:andesite_machine')
    event.recipes.create.sequenced_assembly('kubejs:copper_machine', 'kubejs:andesite_machine', 
        [event.recipes.createDeploying(inter2, [inter2, 'minecraft:gold_nugget']),
        event.recipes.createCutting(inter2, inter2),
        event.recipes.createDeploying(inter2, [inter2, '#create:valve_handles']),
        event.recipes.createDeploying(inter2, [inter2, '#forge:screwdrivers']),
        event.recipes.createPressing(inter, inter)
        ]).transitionalItem(inter2).loops(1).id('kubejs:sequence/copper_machine')
})