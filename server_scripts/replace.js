let itemPairs = [
    ['quark:limestone', 'create:limestone'],
    ['alexscaves:limestone', 'create:limestone'],
    ['alexscaves:smooth_limestone', 'create:cut_imestone'],
    ['alexscaves:limestone_pillar', 'create:limestone_pillar'],
    ['alexscaves:limestone_stairs', 'create:limestone_stairs'],
    ['alexscaves:limestone_wall', 'create:limestone_wall'],
    ['alexscaves:chiseled_limestone', 'create:chiseled_limestone'],
    ['alexscaves:limestone_slab', 'create:limestone_slab'],
    ['alexscaves:smooth_limestone_slab', 'create:cut_limestone_slab'],
    ['alexscaves:smooth_limestone_stairs', 'create:cut_limestone_stairs'],
    ['alexscaves:smooth_limestone_wall', 'create:cut_limestone_wall']
]

itemPairs.forEach(pair => {
    let [oldItem, newItem] = pair

    PlayerEvents.inventoryChanged(oldItem, event => {
        let slot = event.getSlot()
        if (slot <= 5) slot += 36
        else if (slot == 45) slot = 40
        else if (slot >= 36) slot -= 36
        event.getEntity().inventory.set(slot, Item.of(newItem, heldItem.getCount()))
    })
})