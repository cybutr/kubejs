ItemEvents.toolTierRegistry(event => {
    event.add('tool', tier => {
        tier.uses = 256
        tier.repairIngredient = '#forge:ingots/iron'
    })
})