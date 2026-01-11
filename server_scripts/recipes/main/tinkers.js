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
		"ingredient": { "item": "tfmg:steel_ingot" },
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
		let name = i[0];
		let fluid = i[1];

		let variants = [
			{ item: `${prefix}:${name}`, time: time },
			{ item: `${prefix}:cut_${name}`, time: time },
			{ item: `${prefix}:cut_${name}_stairs`, time: stairsTime },
			{ item: `${prefix}:cut_${name}_wall`, time: wallTime },
			{ item: `${prefix}:cut_${name}_slab`, time: slabTime },
			{ item: `${prefix}:polished_cut_${name}`, time: time },
			{ item: `${prefix}:polished_cut_${name}_stairs`, time: stairsTime },
			{ item: `${prefix}:polished_cut_${name}_wall`, time: wallTime },
			{ item: `${prefix}:polished_cut_${name}_slab`, time: slabTime },
			{ item: `${prefix}:small_${name}_bricks`, time: time },
			{ item: `${prefix}:small_${name}_brick_stairs`, time: stairsTime },
			{ item: `${prefix}:small_${name}_brick_wall`, time: wallTime },
			{ item: `${prefix}:small_${name}_brick_slab`, time: slabTime },
			{ item: `${prefix}:cut_${name}_bricks`, time: time },
			{ item: `${prefix}:cut_${name}_brick_stairs`, time: stairsTime },
			{ item: `${prefix}:cut_${name}_brick_slab`, time: slabTime },
			{ item: `${prefix}:cut_${name}_brick_wall`, time: wallTime },
			{ item: `${prefix}:layered_${name}`, time: time },
			{ item: `${prefix}:${name}_pillar`, time: time },
			{ item: `${prefix}:slab_${name}`, time: slabTime },
			{ item: `design_decor:${name}_castel_brick_stairs`, time: stairsTime },
			{ item: `design_decor:${name}_castel_brick_slab`, time: slabTime },
			{ item: `design_decor:${name}_castel_brick_wall`, time: wallTime },
			{ item: `design_decor:${name}_castel_bricks`, time: time },
			{ item: `design_decor:${name}_castel_tile_stairs`, time: stairsTime },
			{ item: `design_decor:${name}_castel_tile_slab`, time: slabTime },
			{ item: `design_decor:${name}_castel_tiles`, time: time },
			{ item: `create_dd:${name}_asphalt_block`, time: time },
			{ item: `create_dd:${name}_mossy_bricks`, time: time }
		];

		if (['veridium', 'asurine', 'crimsite', 'ochrum'].includes(name)) {
			variants.push({ item: `create_dd:mossy_${name}`, time: time });
		}

		variants.forEach(variant => {
			event.custom({
				"type": "tconstruct:melting",
				"ingredient": { "item": variant.item },
				"result": { "fluid": fluid, "amount": h },
				"temperature": temperature,
				"time": variant.time
			}).id(`kubejs:melting/${variant.item.replace(/:/g, '_')}`);
		});
	});

	event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
		"tag": "tconstruct:casts/multi_use/plate"
	},
	"conditions": [
		{
		"type": "mantle:tag_filled",
		"tag": "forge:plates/refined_obsidian"
		}
	],
	"cooling_time": 47,
	"fluid": {
		"amount": 90,
		"tag": "forge:molten_refined_obsidian"
	},
	"result": {
		"tag": "forge:plates/refined_obsidian"
	}
	}).id('kubejs:casting/multi_use/refined_obsidian_plate')

	event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
		"tag": "tconstruct:casts/single_use/plate"
	},
	"cast_consumed": true,
	"conditions": [
		{
		"type": "mantle:tag_filled",
		"tag": "forge:plates/refined_obsidian"
		}
	],
	"cooling_time": 47,
	"fluid": {
		"amount": 90,
		"tag": "forge:molten_refined_obsidian"
	},
	"result": {
		"tag": "forge:plates/refined_obsidian"
	}
	}).id('kubejs:casting/single_use/refined_obsidian_plate')

	event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
		"item": "minecraft:cobweb"
	},
	"cast_consumed": true,
	"cooling_time": 52,
	"fluid": {
		"amount": 90,
		"tag": "forge:molten_silver"
	},
	"result": "tconstruct:silky_cloth"
	}).id('kubejs:casting/silky_cloth')

	event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
		"tag": "tconstruct:casts/multi_use/ingot"
	},
	"cooling_time": 57,
	"fluid": {
		"amount": 90,
		"tag": "c:molten_nethersteel"
	},
	"result": {
		"tag": "forge:ingots/nethersteel"
	}
	}).id('kubejs:casting/multi_use/nethersteel_ingot')

	event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
		"tag": "tconstruct:casts/single_use/ingot"
	},
	"cast_consumed": true,
	"cooling_time": 57,
	"fluid": {
		"amount": 90,
		"tag": "c:molten_nethersteel"
	},
	"result": {
		"tag": "forge:ingots/nethersteel"
	}
	}).id('kubejs:casting/single_use/nethersteel_ingot')
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"tag": "tconstruct:casts/multi_use/ingot"
		},
		"cooling_time": 57,
		"fluid": {
			"amount": 90,
			"name": "createbigcannons:molten_cast_iron"
		},
		"result": {
			"item": "tfmg:cast_iron_ingot"
		}
	}).id('kubejs:casting/multi_use/cast_iron_ingot')

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"tag": "tconstruct:casts/single_use/ingot"
		},
		"cast_consumed": true,
		"cooling_time": 57,
		"fluid": {
			"amount": 90,
			"name": "createbigcannons:molten_cast_iron"
		},
		"result": {
			"item": "tfmg:cast_iron_ingot"
		}
	}).id('kubejs:casting/single_use/cast_iron_ingot')
	event.custom({
		"type": "tconstruct:ore_melting",
		"conditions": [
			{
				"type": "mantle:tag_combination_filled",
				"ignore": "tconstruct:non_singular_ore_rates",
				"match": "forge:ores/iron"
			}
		],
		"ingredient": {
			"type": "forge:difference",
			"base": {
				"tag": "forge:ores/iron"
			},
			"subtracted": {
				"tag": "tconstruct:non_singular_ore_rates"
			}
		},
		"rate": "metal",
		"result": {
			"amount": 180,
			"tag": "forge:molten_iron"
		},
		"temperature": 800,
		"time": 150
	}).id('kubejs:ore_melting/iron_singular')

	event.custom({
		"type": "tconstruct:ore_melting",
		"ingredient": {
			"tag": "forge:storage_blocks/raw_iron"
		},
		"rate": "metal",
		"result": {
			"amount": 1620,
			"tag": "forge:molten_iron"
		},
		"temperature": 800,
		"time": 361
	}).id('kubejs:ore_melting/raw_iron_block')

	event.custom({
		"type": "tconstruct:ore_melting",
		"ingredient": {
			"tag": "forge:raw_materials/iron"
		},
		"rate": "metal",
		"result": {
			"amount": 180,
			"tag": "forge:molten_iron"
		},
		"temperature": 800,
		"time": 90
	}).id('kubejs:ore_melting/raw_iron')
})