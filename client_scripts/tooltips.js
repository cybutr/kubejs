ItemEvents.tooltip(event => {
/*     event.addAdvanced('kubejs:tsteel_machine', (item, advanced, text) => {
        text.add(2, Text.empty())
        text.add(3, Text.gray('Recipe Sequence').italic(false))
        text.add(4, Text.darkGray('Progress: 1/2').italic(false))
        text.add(5, Text.aqua("Next: Continue with assembly").italic(false))
    }) */
    event.addAdvanced('kubejs:incomplete_computer', (item, advanced, text) => {
        text.add(2, Text.empty())
        text.add(3, Text.gray('Recipe Sequence').italic(false))
        text.add(4, Text.darkGray('Progress: 1/2').italic(false))
        text.add(5, Text.aqua("Next: Continue with assembly").italic(false))
    })
    event.addAdvanced('kubejs:andesite_upgrade_smithing_template', (item, advanced, text) => {
        text.add(1, [Text.gray('Andesite Upgrade')])
        text.add(2, [Text.of(' ')])
        text.add(3, [Text.gray('Applies to:')])
        text.add(4, [Text.blue(' Andesite Machine')])
/*         text.add(5, [Text.gray('Ingredients:')])
        text.add(6, [Text.blue(' Whatever Ingot')]) */
    })
    event.addAdvanced('kubejs:copper_upgrade_smithing_template', (item, advanced, text) => {
        text.add(1, [Text.gray('Copper Upgrade')])
        text.add(2, [Text.of(' ')])
        text.add(3, [Text.gray('Applies to:')])
        text.add(4, [Text.blue(' Copper Machine')])
/*         text.add(5, [Text.gray('Ingredients:')])
        text.add(6, [Text.blue(' Whatever Ingot')]) */
    })
    event.addAdvanced('kubejs:brass_upgrade_smithing_template', (item, advanced, text) => {
        text.add(1, [Text.gray('Brass Upgrade')])
        text.add(2, [Text.of(' ')])
        text.add(3, [Text.gray('Applies to:')])
        text.add(4, [Text.blue(' Brass Machine')])
/*         text.add(5, [Text.gray('Ingredients:')])
        text.add(6, [Text.blue(' Whatever Ingot')]) */
    })
})