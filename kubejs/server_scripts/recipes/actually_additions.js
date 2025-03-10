ServerEvents.recipes(event => {


	event.remove({output: 'actuallyadditions:iron_casing'})
	event.shaped(
	  Item.of('actuallyadditions:iron_casing'), 
	  [
	    'BCB',
		'CAC',
		'BCB'
	  ], 
	  {
		A: 'actuallyadditions:black_quartz',
		B: 'modern_industrialization:battery_alloy_ingot',
		C: '#c:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'actuallyadditions:triple_battery'})
	event.shaped(
	  Item.of('actuallyadditions:triple_battery'), 
	  [
	    'BCB',
		'DAD',
		'DDD'
	  ], 
	  {
		A: 'actuallyadditions:advanced_coil',
		B: 'pneumaticcraft:ingot_iron_compressed',
		C: 'actuallyadditions:double_battery',
		D: 'actuallyadditions:empowered_enori_crystal'
	  }
	)
	
	
})