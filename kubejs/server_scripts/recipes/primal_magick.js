ServerEvents.recipes(event => {
	
	
	event.remove({output: 'primalmagick:mundane_wand'})
	event.shaped(
	  Item.of('primalmagick:mundane_wand'), 
	  [
	    'CB ',
		'BA ',
		'  A'
	  ], 
	  {
		A: '#c:rods/wooden',
		B: '#primalmagick:essences/terrestrial_dusts',
		C: 'twilightforest:naga_scale'
	  }
	)
	
	
})