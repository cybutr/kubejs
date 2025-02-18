ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:tsteel_machine', (item, advanced, text) => {
        text.add(2, Text.empty())
        text.add(3, Text.gray('Recipe Sequence').italic(false))
        text.add(4, Text.darkGray('Progress: 1/2').italic(false))
        text.add(5, Text.aqua("Next: Continue with assembly").italic(false))
    })
})