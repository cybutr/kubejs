StartupEvents.registry('item', event => {
	event.create('inclomplete_netherrack', 'create:sequenced_assembly')
	event.create('calcite_catalyst')
		.displayName('Calcite Catalyst')
	event.create('limestone_shard')
		.displayName('Limestone Shard')
})