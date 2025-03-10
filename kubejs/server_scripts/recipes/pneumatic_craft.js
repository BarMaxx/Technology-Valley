ServerEvents.recipes(event => {


	event.remove({output: 'pneumaticcraft:air_compressor'})
	event.shaped(
	  Item.of('pneumaticcraft:air_compressor'), 
	  [
	    'BBB',
		'BAD',
		'BCB'
	  ], 
	  {
		A: 'actuallyadditions:quintuple_battery',
		B: 'pneumaticcraft:reinforced_bricks',
		C: 'minecraft:furnace',
		D: 'pneumaticcraft:pressure_tube'
	  }
	)
	
	
	event.remove({output: 'pneumaticcraft:small_tank'})
	event.shaped(
	  Item.of('pneumaticcraft:small_tank'), 
	  [
	    'BCB',
		'CAC',
		'BCB'
	  ], 
	  {
		A: '#c:glass_blocks',
		B: 'forbidden_arcanus:ferrognetic_mixture',
		C: 'pneumaticcraft:ingot_iron_compressed'
	  }
	)
	
	
})