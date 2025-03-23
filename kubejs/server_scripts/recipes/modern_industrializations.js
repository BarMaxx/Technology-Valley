ServerEvents.recipes(event => {


	event.remove({output: 'modern_industrialization:forge_hammer'})
	event.shaped(
	  Item.of('modern_industrialization:forge_hammer'), 
	  [
	    'CCC',
		' B ',
		'BAB'
	  ], 
	  {
		A: 'naturesaura:sky_ingot',
		B: 'minecraft:iron_ingot',
		C: 'minecraft:heavy_weighted_pressure_plate'
	  }
	)
	
	
	event.remove({output: 'modern_industrialization:motor'})
	event.shaped(
	  Item.of('modern_industrialization:motor'), 
	  [
	    'CBD',
		'BAB',
		'DBC'
	  ], 
	  {
		A: 'modern_industrialization:steel_rod_magnetic',
		B: 'modern_industrialization:copper_wire',
		C: 'modern_industrialization:tin_cable',
		D: 'enderio:vibrant_alloy_ingot'
	  }
	)
	
	
})