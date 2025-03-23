ServerEvents.recipes(event => {


	event.remove({output: 'enderio:primitive_alloy_smelter'})
	event.shaped(
	  Item.of('enderio:primitive_alloy_smelter'), 
	  [
	    'CDC',
		'BAB',
		'BDB'
	  ], 
	  {
		A: 'enderio:grains_of_infinity',
		B: 'minecraft:deepslate',
		C: 'minecraft:furnace',
		D: 'naturesaura:sky_ingot'
	  }
	)
	
	
	event.remove({output: 'enderio:void_chassis'})
	event.shaped(
	  Item.of('enderio:void_chassis'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'enderio:grains_of_infinity',
		B: 'twilightforest:ironwood_ingot',
		C: 'minecraft:iron_bars'
	  }
	)
	
	
})