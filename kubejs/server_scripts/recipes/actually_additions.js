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
	
	
})