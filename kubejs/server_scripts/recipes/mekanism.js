ServerEvents.recipes(event => {


	event.remove({output: 'mekanism:metallurgic_infuser'})
	event.shaped(
	  Item.of('mekanism:metallurgic_infuser'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: '#c:ingots/osmium',
		B: 'mekanism:metallurgic_infuser',
		C: 'minecraft:furnace',
		D: 'minecraft:iron_ingot'
	  }
	)
	
	
})