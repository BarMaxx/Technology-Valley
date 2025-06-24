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
		D: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'modern_industrialization:advanced_machine_hull'})
	event.shaped(
	  Item.of('modern_industrialization:advanced_machine_hull'), 
	  [
	    'ECE',
		'BAB',
		'DDD'
	  ], 
	  {
		A: 'modern_industrialization:advanced_machine_casing',
		B: 'modern_industrialization:silicon_battery',
		C: 'modern_industrialization:electronic_circuit',
		D: 'modern_industrialization:electrum_cable',
		E: 'primalmagick:magitech_parts_enchanted'
	  }
	)
	
	
})