ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    let c = 'kubejs:copper_machine'
    let w = 'create:wrench'
    sc('create:portable_fluid_interface', c, 2)
    sc('create:item_drain', c, 2)
    sm('2x create:spout', c, w, 'create:fluid_tank')
    sm('2x create:hose_pulley', c, w, 'minecraft:dried_kelp_block')
    sm('2x create:smart_fluid_pipe', 'create:fluid_pipe', w, 'create:electron_tube')

});