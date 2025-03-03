ServerEvents.recipes(event => {

	
	event.remove({output: 'powah:dielectric_casing'})
	event.shaped(
	  Item.of('powah:dielectric_casing'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'mekanism:ultimate_control_circuit',
		B: 'powah:dielectric_rod',
		C: 'powah:dielectric_rod_horizontal',
		D: 'minecraft:iron_ingot'
	  }
	)
	
	
})