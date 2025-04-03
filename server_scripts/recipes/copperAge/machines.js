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
    sm('2x tfmg:steel_smart_fluid_pipe', 'tfmg:steel_pipe', w, 'create:electron_tube')
    sm('2x tfmg:cast_iron_smart_fluid_pipe', 'tfmg:cast_iron_pipe', w, 'create:electron_tube')
    sm('2x tfmg:brass_smart_fluid_pipe', 'tfmg:brass_pipe', w, 'create:electron_tube')
    sm('2x tfmg:plastic_smart_fluid_pipe', 'tfmg:plastic_pipe', w, 'create:electron_tube')
    sm('2x tfmg:aluminum_smart_fluid_pipe', 'tfmg:aluminum_pipe', w, 'create:electron_tube')
    sm( 'create_enchantment_industry:disenchanter', c, w, '#create:sandpaper')
    sm('3x sliceanddice:sprinkler', c, w, 'create_things_and_misc:sprinkler_head')
    sm('2x functionalstorage:void_upgrade', c, w, 'obsidian')
    event.shaped(
        Item.of('create_things_and_misc:sprinkler'),
        [
            " B ",
            "BMB",
            "CCC"
        ],
        {
            M: 'kubejs:copper_machine',
            B: 'sliceanddice:sprinkler',
            C: 'create:copper_sheet'
        }
    ).id('kubejs:shaped/sprinkler')
})