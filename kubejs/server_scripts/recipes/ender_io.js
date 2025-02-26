ServerEvents.recipes(event => {


	event.remove({output: 'enderio:primitive_alloy_smelter'})
	event.shaped(
	  Item.of('enderio:primitive_alloy_smelter'), 
	  [
	    'CDC',
		'BAB',
		'BBB'
	  ], 
	  {
		A: 'enderio:grains_of_infinity',
		B: 'minecraft:deepslate',
		C: 'minecraft:furnace',
		D: 'twilightforest:ironwood_ingot'
	  }
	)
	
	
})