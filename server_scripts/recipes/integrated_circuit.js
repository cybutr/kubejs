ServerEvents.recipes(event => {
    let inter = Item.of('create_dd:incomplete_integrated_circuit', 2)
    event.recipes.create.sequenced_assembly(
        'create_dd:integrated_circuit',
        'create_dd:lapis_sheet',
        [
            event.recipes.createDeploying(inter, [inter, 'minecraft:redstone']),
            event.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
            event.recipes.createDeploying(inter, [inter, 'create:brass_nugget']),
            event.custom({
        "type": "northstar:engraving",
        "ingredients": [
          {
            "item": "create_dd:incomplete_integrated_circuit"
          }
        ],
        "results": [
          {
            "item": "create_dd:incomplete_integrated_circuit"
          }
        ]
      })
        ]
    ).transitionalItem(inter).loops(4).id('kubejs:sequence/integrated_circuit')
})