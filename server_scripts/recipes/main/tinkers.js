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
		"type": "tconstruct:alloy",
		"inputs": [
            { 'fluid': 'tconstruct:molten_cobalt', 'amount':180 },
            { 'fluid': 'tconstruct:molten_debris', 'amount':90 }
        ],
		"result": {
			"fluid": 'tconstruct:molten_manyullyn',
			"amount": 270
		},
		"temperature": 1800,
		"time": 210
	}).id('kubejs:alloy/manyullyn')
    
    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:cooling_fluid",
			"amount": 300
		},
		"duration": 100,
		"temperature": -200,
		"rate": 8
	})

    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "createaddition:bioethanol",
			"amount": 350
		},
		"duration": 500,
		"temperature": 1500,
		"rate": 12
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:kerosene",
			"amount": 200
		},
		"duration": 650,
		"temperature": 1200,
		"rate": 12
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:lpg",
			"amount": 250
		},
		"duration": 400,
		"temperature": 800,
		"rate": 10
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:gasoline",
			"amount": 300
		},
		"duration": 300,
		"temperature": 1400,
		"rate": 13
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:diesel",
			"amount": 400
		},
		"duration": 200,
		"temperature": 800,
		"rate": 11
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:propane",
			"amount": 500
		},
		"duration": 550,
		"temperature": 1900,
		"rate": 17
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:creosote",
			"amount": 300
		},
		"duration": 400,
		"temperature": 1200,
		"rate": 11
	})
	
	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:napalm",
			"amount": 250
		},
		"duration": 350,
		"temperature": 1800,
		"rate": 14
	})
	
	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:naphtha",
			"amount": 300
		},
		"duration": 300,
		"temperature": 1300,
		"rate": 10
	})
})