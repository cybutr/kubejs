StartupEvents.registry('mob_effect', event => {
	event.create('blood_loss').displayName('Blood Loss').color(0x0bb5a)
	event.create('pregnant').displayName('Pregnant').color(0xececd8).modifyAttribute('minecraft:generic.movement_speed', 'eca649e5-485d-470e-be72-88050bfa8f0d', -0.04, 'addition')
	event.create('erection').displayName('Erection').color(0x0bb5a).modifyAttribute('forge:block_reach', 'd04b9366-9a55-4b65-8039-1bced5bf6287', 1.5, 'multiply_total')
})