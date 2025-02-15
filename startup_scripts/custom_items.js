StartupEvents.registry('item', event => {
    let tool = (name) => {
        let id = name.toLowerCase()
        event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name)
    }
	event.create('calcite_catalyst').displayName('Calcite Catalyst').texture('kubejs:item/calcite_catalyst')
	event.create('limestone_shard').displayName('Limestone Shard').texture('kubejs:item/limestone_shard')
	event.create('lapis_lazuli_catalyst').displayName('Lapis Lazuli Catalyst').texture('kubejs:item/lapis_lazuli_catalyst')
	event.create('asurine_shard').displayName('Asurine Shard').texture('kubejs:item/asurine_shard')
	event.create('ochrum_shard').displayName('Ochrum Shard').texture('kubejs:item/ochrum_shard')
	event.create('veridium_shard').displayName('Veridium Shard').texture('kubejs:item/veridium_shard')
	event.create('crimsite_shard').displayName('Crimsite Shard').texture('kubejs:item/crimsite_shard')
	event.create('obsidian_alloy').displayName('Obsidian Alloy').texture('kubejs:item/obsidian_alloy')
	event.create('bauxite_shard').displayName('Bauxite Shard').texture('kubejs:item/bauxite_shard')
	event.create('alumina_crystal').displayName('Alumina Crystal').texture('kubejs:item/alumina_crystal')
	event.create('crushed_deepslate').displayName('Crushed Deepslate').texture('kubejs:item/crushed_deepslate')
	event.create('sturdy_shards').displayName('Sturdy Shards').texture('kubejs:item/sturdy_shards')
	event.create('deepslate_alloy').displayName('Deepslate Alloy').texture('kubejs:item/deepslate_alloy')
	event.create('sulfuric_crystal').displayName('Sulfuric Crystal').texture('kubejs:item/sulfuric_crystal')
	event.create('empty_tube').displayName('Empty Tube').texture('kubejs:item/empty_tube')
	event.create("copper_machine").tooltip("Used to make basic tinkers construct and fluid items").displayName("Copper Machine").parentModel("kubejs:item/copper_machine")
	event.create("andesite_machine").tooltip("Used to make basic machines for create").displayName("Andesite Machine").parentModel("kubejs:item/andesite_machine")
	event.create("brass_machine").tooltip("Used to make mid game stuff such as steam engines").displayName("Brass Machine").parentModel("kubejs:item/brass_machine")
	event.create("steel_machine").tooltip("Used to make heavy machinery such as a pumpjack").displayName("Steel Machine").parentModel("kubejs:item/steel_machine")
	tool('Saw')
	tool('Screwdriver')
	event.create('drill_head').displayName('Drill Head').texture('kubejs:item/drill_head')
	event.create('saw_blade').displayName('Saw Blade').texture('kubejs:item/saw_blade')
	event.create('fortrens').food(food => 
		food
		.hunger(12)
		.saturation(5)
		.effect('minecraft:nausea', 600, 0, 1)
		.alwaysEdible()
		.meat()
		.eaten(ctx => {
		})
	).displayName("Fortrens's Dildo").texture('kubejs:item/fortrens').tooltip("Fortens's long lost dildo").use((level, player, hand) => true).releaseUsing((itemstack, level, entity, tick) => {
		itemstack.shrink(1)
		level.createExplosion(entity.x, entity.y, entity.z).explode()
	})
	event.create('cum_bottle').food(food => 
		food
		.hunger(1)
		.saturation(2)
		.effect('kubejs:pregnant', 450, 0, 1)
		.alwaysEdible()
		.eaten(ctx => {
			ctx.player.give("minecraft:glass_bottle")
		})
	).useAnimation("drink").displayName("Cum Bottle").texture('kubejs:item/cum_bottle').tooltip("A fresh load of cum")
})
