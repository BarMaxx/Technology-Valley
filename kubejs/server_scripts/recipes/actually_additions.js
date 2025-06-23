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
		A: 'primalmagick:magitech_parts_basic',
		B: 'eternal_starlight:aethersent_ingot',
		C: '#c:rods/steel'
	  }
	)
	
	
})