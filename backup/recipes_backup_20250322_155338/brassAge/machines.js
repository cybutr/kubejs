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
    event.recipes.create.mechanical_crafting('petrolsparts:hydraulic_transmission', [
        'CSM',
        'SPB',
        ' P ',
        'INI',
        'MSC'], {
        C: 'create:cogwheel',
        S: 'create:brass_sheet',
        M: 'create:precision_mechanism',
        P: 'tfmg:brass_pipe',
        I: 'create:sturdy_sheet',
        N: 'kubejs:brass_machine',
        B: 'minecraft:water_bucket'
    }).id('kubejs:petrolsparts/hydraulit_transmission')
})