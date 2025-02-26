ServerEvents.recipes(event => {


	event.remove({output: 'ae2:inscriber'})
	event.shaped(
	  Item.of('ae2:inscriber'), 
	  [
	    'ABA',
		'C A',
		'ABA'
	  ], 
	  {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:piston',
		C: 'enderio:vibrant_alloy_ingot'
	  }
	)
	
	
})