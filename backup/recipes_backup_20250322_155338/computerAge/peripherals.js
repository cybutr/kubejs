ServerEvents.recipes(event => {
    event.shaped('computercraft:wired_modem',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:limestone',
            B: 'create_connected:control_chip',
            C: 'createaddition:electrum_wire'
        }
    ).id('kubejs:computercraft/wired_modem')

    event.shaped('computercraft:monitor_normal',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:limestone',
            B: 'createrailwaysnavigator:advanced_display',
            C: 'createaddition:electrum_wire'
        }
    ).id('kubejs:computercraft/monitor_normal')

    event.recipes.create.mechanical_crafting('computercraft:monitor_advanced',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'computercraft:monitor_normal',
            C: 'vintageimprovements:refined_obsidian_wire'
        }
    ).id('kubejs:computercraft/monitor_advanced')

    event.recipes.create.mechanical_crafting('computercraft:printer',
        [
            'ADA',
            'ABE',
            'ACA'
        ],
        {
            A: 'create:limestone',
            B: 'advancedperipherals:peripheral_casing',
            C: 'createaddition:electrum_wire',
            D: 'create_connected:control_chip',
            E: '#c:dyes'
        }
    ).id('kubejs:computercraft/printer')

    event.recipes.create.mechanical_crafting('computercraft:speaker',
        [
            'AAA',
            'ACA',
            'ABA'
        ],
        {
            A: 'create:limestone',
            B: 'createaddition:electrum_wire',
            C: 'create_things_and_misc:brass_speaker'
        }
    ).id('kubejs:computercraft/speaker')

    event.recipes.create.mechanical_crafting('computer_cartographer:computerized_cartographer',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'vintageimprovements:cast_iron_sheet',
            B: 'minecraft:cartography_table',
            C: 'create_connected:control_chip'
        }
    ).id('kubejs:computercraft/computerized_cartographer')

    event.shaped('computercraft:wireless_modem_advanced',
        [
            'A',
            'BD',
            'C'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'computercraft:wired_modem',
            C: 'vintageimprovements:refined_obsidian_wire',
            D: 'minecraft:ender_eye'
        }
    ).id('kubejs:computercraft/wireless_modem_advanced')

    event.shaped('computercraft:wireless_modem_normal',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:limestone',
            B: 'computercraft:wired_modem',
            C: 'create:linked_controller'
        }
    ).id('kubejs:computercraft/wireless_modem_normal')
})