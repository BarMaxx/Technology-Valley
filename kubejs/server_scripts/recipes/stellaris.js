ServerEvents.recipes(event => {


	event.remove({output: 'stellaris:rocket_station'})
	event.shaped(
	  Item.of('stellaris:rocket_station'), 
	  [
	    'DCD',
		'CAC',
		'BBB'
	  ], 
	  {
		A: 'modern_industrialization:singularity',
		B: 'stellaris:iron_plating_block',
		C: 'stellaris:heavy_metal_ingot',
		D: 'mekanism:teleportation_core'
	  }
	)
	
	
})