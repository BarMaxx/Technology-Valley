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
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:furnace',
		D: 'minecraft:iron_ingot'
	  }
	)
	
	
	event.remove({output: 'mekanism:teleportation_core'})
	event.shaped(
	  Item.of('mekanism:teleportation_core'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'powah:steel_energized',
		B: 'forbidden_arcanus:deorum_ingot',
		C: 'mekanism:alloy_atomic',
		D: '#c:ender_pearls'
	  }
	)
	
	
})