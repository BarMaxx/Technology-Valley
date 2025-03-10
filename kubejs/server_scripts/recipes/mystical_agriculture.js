ServerEvents.recipes(event => {

	
	event.remove({output: 'mysticalagriculture:infusion_altar'})
	event.shaped(
	  Item.of('mysticalagriculture:infusion_altar'), 
	  [
	    'DCD',
		'BAB',
		'AAA'
	  ], 
	  {
		A: 'minecraft:stone',
		B: 'justdirethings:celestigem',
		C: 'minecraft:red_wool',
		D: 'minecraft:gold_ingot'
	  }
	)
	
	
})