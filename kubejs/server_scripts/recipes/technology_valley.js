ServerEvents.recipes(event => {


	event.shaped(
	  Item.of('technologyvalley:zanite_catalyst'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'aether:zanite_gemstone',
		B: 'technologyvalley:fire_iron',
		C: 'minecraft:iron_ingot'
	  }
	)
	
	
})