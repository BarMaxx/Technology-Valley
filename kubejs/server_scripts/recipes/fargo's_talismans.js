ServerEvents.recipes(event => {

	
	event.remove({output: 'fargostalismans:talisman_base_normal'})
	event.shaped(
	  Item.of('fargostalismans:talisman_base_normal'), 
	  [
	    'GBF',
		'DAD',
		'FCG'
	  ], 
	  {
		A: 'minecraft:totem_of_undying',
		B: 'minecraft:glow_berries',
		C: 'minecraft:honey_bottle',
		D: 'justdirethings:celestigem',
		F: 'minecraft:golden_carrot',
		G: 'minecraft:golden_apple'
	  }
	)
	
	
})