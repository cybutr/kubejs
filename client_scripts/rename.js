ClientEvents.lang('en_us', event => {
    const rename = (item, newName) => event.add(Item.of(item).item.getDescriptionId(), newName)
    rename('functionalstorage:gold_upgrade', 'Brass Upgrade')
})