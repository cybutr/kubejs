StartupEvents.registry('item', event => {
	event.create('calcite_catalyst').displayName('Calcite Catalyst').texture('kubejs:item/calcite_catalyst')
	event.create('limestone_shard').displayName('Limestone Shard').texture('kubejs:item/limestone_shard')
	event.create('lapis_lazuli_catalyst').displayName('Lapis Lazuli Catalyst').texture('kubejs:item/lapis_lazuli_catalyst')
	event.create('asurine_shard').displayName('Asurine Shard').texture('kubejs:item/asurine_shard')
	event.create('ochrum_shard').displayName('Ochrum Shard').texture('kubejs:item/ochrum_shard')
	event.create('veridium_shard').displayName('Veridium Shard').texture('kubejs:item/veridium_shard')
	event.create('crimsite_shard').displayName('Crimsite Shard').texture('kubejs:item/crimsite_shard')
	event.create('obsidian_alloy').displayName('Obsidian Alloy').texture('kubejs:item/obsidian_alloy')
	event.create('crushed_deepslate').displayName('Crushed Deepslate').texture('kubejs:item/crushed_deepslate')
	event.create('sturdy_shards').displayName('Sturdy Shards').texture('kubejs:item/sturdy_shards')
	event.create('deepslate_alloy').displayName('Deepslate Alloy').texture('kubejs:item/deepslate_alloy')
	event.create('sulfuric_crystal').displayName('Sulfuric Crystal').texture('kubejs:item/sulfuric_crystal')
	event.create('empty_tube').displayName('Empty Tube').texture('kubejs:item/empty_tube')
	event.create('fortrens').food(food => 
		food
		.hunger(12)
		.saturation(5)
		.effect('minecraft:nausea', 600, 0, 1)
		.alwaysEdible()
		.meat()
		.eaten(ctx => {
			global.fortrens(ctx)
		})
	).displayName("Fortrens's Dildo").texture('kubejs:item/fortrens').use((level, player, hand) => true).releaseUsing((itemstack, level, entity, tick) => {
		itemstack.shrink(1)
		level.createExplosion(entity.x, entity.y, entity.z).explode()})
})

global.fortrens = ctx => {
	ctx.player.tell('Negr!')
}
