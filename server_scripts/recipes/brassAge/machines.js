ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    let c = 'kubejs:brass_machine'
    let i = 'create_dd:integrated_mechanism'
    let w = 'create:wrench'
    sm('2x create:sequenced_gearshift', c, w, 'create:electron_tube')
    sm('2x create:brass_tunnel', i, w, 'create:electron_tube')
    sm('2x create:brass_funnel', i, w, 'create:electron_tube')
    sm('2x create:redstone_link', i, w, 'minecraft:redstone_torch')
})