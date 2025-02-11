ServerEvents.recipes(event => {
    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": 'minecraft:redstone_block'
		},
		"result": {
			"fluid": 'kubejs:molten_redstone',
			"amount": 900
		},
		"temperature": 500,
		"time": 90
	}).id('kubejs:melting/redstone_block')

    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": 'minecraft:redstone'
		},
		"result": {
			"fluid": 'kubejs:molten_redstone',
			"amount": 100
		},
		"temperature": 500,
		"time": 10
	}).id('kubejs:melting/redstone')

    event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
            { 'fluid': 'tconstruct:molten_zinc', 'amount':90 },
            { 'fluid': 'tconstruct:molten_copper', 'amount':180 }
        ],
		"result": {
			"fluid": 'tconstruct:molten_brass',
			"amount": 270
		},
		"temperature": 400,
		"time": 80
	}).id('kubejs:alloy/brass')
    
    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		    "name": "tfmg:cooling_fluid",
		    "amount": 300
		},
		"duration": 100,
		"temperature": -200
	})

    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		    "name": "createaddition:bioethanol",
		    "amount": 350
		},
		"duration": 500,
		"temperature": 1400
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		    "name": "tfmg:kerosene",
		    "amount": 200
		},
		"duration": 650,
		"temperature": 2100
	})
})