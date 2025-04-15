ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    let c = 'kubejs:copper_machine'
    let w = 'kubejs:copper_upgrade_smithing_template'
    sc('create:portable_fluid_interface', c, 2)
    sc('create:item_drain', c, 2)
    sm('2x create:spout', c, w, 'create:fluid_tank')
    sm('2x create:hose_pulley', c, w, 'minecraft:dried_kelp_block')
    sm('3x create:smart_fluid_pipe', 'create:fluid_pipe', 'create:copper_sheet', 'create:electron_tube')
    sm('3x tfmg:steel_smart_fluid_pipe', 'tfmg:steel_pipe', 'create_dd:steel_sheet', 'create:electron_tube')
    sm('3x tfmg:cast_iron_smart_fluid_pipe', 'tfmg:cast_iron_pipe', 'vintageimprovements:cast_iron_sheet', 'create:electron_tube')
    sm('3x tfmg:brass_smart_fluid_pipe', 'tfmg:brass_pipe', 'create:brass_sheet', 'create:electron_tube')
    sm('3x tfmg:plastic_smart_fluid_pipe', 'tfmg:plastic_pipe', 'tfmg:plastic_sheet', 'create:electron_tube')
    sm('3x tfmg:aluminum_smart_fluid_pipe', 'tfmg:aluminum_pipe', 'vintageimprovements:aluminum_sheet', 'create:electron_tube')
    sm('create_enchantment_industry:disenchanter', c, w, '#create:sandpaper')
    sm('3x sliceanddice:sprinkler', c, w, 'create_things_and_misc:sprinkler_head')
    sm('2x functionalstorage:void_upgrade', c, 'paper', 'obsidian')
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