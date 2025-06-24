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
	
	
	event.remove({output: 'actuallyadditions:wood_casing'})
	event.shaped(
	  Item.of('actuallyadditions:wood_casing'), 
	  [
	    'FCB',
		'CAC',
		'ECD'
	  ], 
	  {
		A: 'primalmagick:magitech_parts_basic',
		B: 'productivetrees:almond_planks',
		C: '#c:rods/bronze',
		D: 'productivetrees:avocado_planks',
		E: 'productivetrees:ash_planks',
		F: 'productivetrees:aspen_planks'
	  }
	)
	
	
})