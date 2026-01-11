ServerEvents.recipes(event => {
    let inter = Item.of('create_dd:incomplete_abstruse_mechanism')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_dd:abstruse_mechanism')
        ],
        Item.of('create:sturdy_sheet'),
        [
            event.recipes.create.deploying(inter, [inter, 'minecraft:amethyst_shard']),
            event.recipes.create.deploying(inter, [inter, 'minecraft:ender_pearl']),
            event.custom({
        "type": "northstar:engraving",
        "ingredients": [
            {
            "item": "create_dd:incomplete_abstruse_mechanism"
            }
        ],
        "results": [
            {
            "item": "create_dd:incomplete_abstruse_mechanism"
            }
        ]
        }),
            event.recipes.create.deploying(inter, [inter, 'kubejs:nickel_tube'])
        ]
    ).transitionalItem(inter)
    .loops(2)
    .id('kubejs:sequence/abstruse_mechanism')
})