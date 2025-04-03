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
		"temperature": 540,
		"time": 90
	}).id('kubejs:melting/redstone_block')

    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": 'minecraft:redstone'
		},
		"result": {
			"fluid": 'kubejs:molten_redstone',
			"amount": 90
		},
		"temperature": 540,
		"time": 10
	}).id('kubejs:melting/redstone')

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "createbigcannons:nethersteel_nugget" },
		"result": { "fluid": "createbigcannons:molten_nethersteel", "amount": 10 },
		"temperature": 900,
		"time": 1
	}).id("kubejs:melting/nethersteel_nugget")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "createbigcannons:nethersteel_ingot" },
		"result": { "fluid": "createbigcannons:molten_nethersteel", "amount": 90 },
		"temperature": 900,
		"time": 9
	}).id("kubejs:melting/nethersteel_ingot")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "createbigcannons:nethersteel_block" },
		"result": { "fluid": "createbigcannons:molten_nethersteel", "amount": 810 },
		"temperature": 900,
		"time": 90
	}).id("kubejs:melting/nethersteel_block")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "createbigcannons:steel_scrap" },
		"result": { "fluid": "tfmg:molten_steel", "amount": 10 },
		"temperature": 810,
		"time": 9
	}).id("kubejs:melting/steel_scrap")
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "fmg:steel_ingot" },
		"result": { "fluid": "tfmg:molten_steel", "amount": 90 },
		"temperature": 810,
		"time": 9
	}).id("kubejs:melting/steel_ingot")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:steel_nugget" },
		"result": { "fluid": "tfmg:molten_steel", "amount": 10 },
		"temperature": 810,
		"time": 1
	}).id("kubejs:melting/steel_nugget")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:steel_sheet" },
		"result": { "fluid": "tfmg:molten_steel", "amount": 90 },
		"temperature": 810,
		"time": 9
	}).id("kubejs:melting/steel_sheet")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "createbigcannons:cast_iron_nugget" },
		"result": { "fluid": "createbigcannons:molten_cast_iron", "amount": 10 },
		"temperature": 540,
		"time": 1
	}).id("kubejs:melting/cast_iron_nugget")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "tfmg:cast_iron_ingot" },
		"result": { "fluid": "createbigcannons:molten_cast_iron", "amount": 90 },
		"temperature": 540,
		"time": 9
	}).id("kubejs:melting/cast_iron_ingot")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "tfmg:cast_iron_block" },
		"result": { "fluid": "createbigcannons:molten_cast_iron", "amount": 810 },
		"temperature": 540,
		"time": 90
	}).id("kubejs:melting/cast_iron_block")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:bronze_nugget" },
		"result": { "fluid": "tconstruct:molten_bronze", "amount": 10 },
		"temperature": 720,
		"time": 1
	}).id("kubejs:melting/bronze_nugget")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:bronze_ingot" },
		"result": { "fluid": "tconstruct:molten_bronze", "amount": 90 },
		"temperature": 720,
		"time": 9
	}).id("kubejs:melting/bronze_ingot")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:bronze_sheet" },
		"result": { "fluid": "tconstruct:molten_bronze", "amount": 90 },
		"temperature": 720,
		"time": 9
	}).id("kubejs:melting/bronze_sheet")

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": "create_dd:bronze_block" },
		"result": { "fluid": "tconstruct:molten_bronze", "amount": 810 },
		"temperature": 720,
		"time": 90
	}).id("kubejs:melting/bronze_block")

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
		"temperature": 360,
		"time": 90
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
		"time": 180
	}).id('kubejs:alloy/manyullyn')
    
    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:cooling_fluid",
			"amount": 270
		},
		"duration": 90,
		"temperature": -180,
		"rate": 8
	})

    event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "createaddition:bioethanol",
			"amount": 360
		},
		"duration": 540,
		"temperature": 1530,
		"rate": 12
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:kerosene",
			"amount": 180
		},
		"duration": 630,
		"temperature": 1170,
		"rate": 12
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:lpg",
			"amount": 270
		},
		"duration": 360,
		"temperature": 810,
		"rate": 10
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:gasoline",
			"amount": 270
		},
		"duration": 270,
		"temperature": 1440,
		"rate": 13
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:diesel",
			"amount": 360
		},
		"duration": 180,
		"temperature": 810,
		"rate": 11
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:propane",
			"amount": 540
		},
		"duration": 540,
		"temperature": 1890,
		"rate": 17
	})

	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:creosote",
			"amount": 270
		},
		"duration": 360,
		"temperature": 1170,
		"rate": 11
	})
	
	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:napalm",
			"amount": 270
		},
		"duration": 360,
		"temperature": 1800,
		"rate": 14
	})
	
	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
			"name": "tfmg:naphtha",
			"amount": 400
		},
		"duration": 470,
		"temperature": 1260,
		"rate": 10
	})
	let TCON = 'tconstruct'
	event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "type": "minecraft:bee"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 25
        },
        "damage": 2
    }).id(TCON + ':smeltery/entity_melting/bee')
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "minecraft:honey_block"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 1000
        },
        "temperature": 1,
        "time": 94
    }).id(TCON + ':smeltery/melting/slime/honey_block')
	let orestones = [
		['veridium', 'tconstruct:molten_copper', 'create'],
		['asurine', 'tconstruct:molten_zinc', 'create'],
		['crimsite', 'tconstruct:molten_iron', 'create'],
		['ochrum', 'tconstruct:molten_gold', 'create'],
		['bauxite', 'tconstruct:molten_aluminum', 'tfmg'],
		['galena', 'tconstruct:molten_lead', 'tfmg']
	]
	let h = 40
	let temperature = 800
	let time = 400
	// Pre-calculate time variations
	let stairsTime = time * 0.75
	let wallTime = time * (2/3)
	let slabTime = time * 0.5

	orestones.forEach(i => {
		let prefix = i[2] || 'create';
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':' + i[0]
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':cut_' + i[0]
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':cut_' + i[0] + "_stairs"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": stairsTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':cut_' + i[0] + "_wall"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": wallTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':polished_cut_' + i[0]
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':polished_cut_' + i[0] + "_stairs"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": stairsTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':polished_cut_' + i[0] + "_wall"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": wallTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':small_' + i[0] + "_bricks"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':small_' + i[0] + "_brick_stairs"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": stairsTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':small_' + i[0] + "_brick_wall"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": wallTime
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':layered_' + i[0]
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':' + i[0] + "_pillar"
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": time
		});
		
		// Add slab variant for every orestone.
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": prefix + ':slab_' + i[0]
			},
			"result": {
				"fluid": i[1],
				"amount": h
			},
			"temperature": temperature,
			"time": slabTime
		});
		
		// Only add the mossy variant for the specified orestones using the create_dd prefix.
		if (['veridium', 'asurine', 'crimsite', 'ochrum'].includes(i[0])) {
			event.custom({
				"type": "tconstruct:melting",
				"ingredient": {
					"item": "create_dd:mossy_" + i[0]
				},
				"result": {
					"fluid": i[1],
					"amount": h
				},
				"temperature": temperature,
				"time": time
			});
		}
	});
})