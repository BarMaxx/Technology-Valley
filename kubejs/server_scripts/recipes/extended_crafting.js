ServerEvents.recipes(event => {
	
	
	event.remove({output: 'extendedcrafting:basic_component'})
	event.shaped(
	  Item.of('extendedcrafting:basic_component'), 
	  [
	    'CBD',
		'BAB',
		'DBC'
	  ], 
	  {
		A: 'extendedcrafting:black_iron_slate',
		B: 'justdirethings:ferricore_ingot',
		C: 'extendedcrafting:luminessence',
		D: 'deep_aether:stratus_ingot'
	  }
	)
	
	
	event.remove({output: 'extendedcrafting:advanced_component'})
	event.shaped(
	  Item.of('extendedcrafting:advanced_component'), 
	  [
	    'CBD',
		'BAB',
		'DBC'
	  ], 
	  {
		A: 'extendedcrafting:basic_catalyst',
		B: 'justdirethings:blazegold_ingot',
		C: 'extendedcrafting:luminessence',
		D: 'undergarden:forgotten_nugget'
	  }
	)
	
	
	event.remove({output: 'extendedcrafting:basic_catalyst'})
	event.shaped(
	  Item.of('extendedcrafting:basic_catalyst'), 
	  [
	    'CBD',
		'BAB',
		'DBC'
	  ], 
	  {
		A: 'technologyvalley:fire_iron',
		B: 'extendedcrafting:basic_component',
		C: 'aether:enchanted_gravitite',
		D: 'deep_aether:skyjade'
	  }
	)
	
	
	event.remove({output: 'extendedcrafting:advanced_catalyst'})
	event.shaped(
	  Item.of('extendedcrafting:advanced_catalyst'), 
	  [
	    'CBD',
		'BAB',
		'DBC'
	  ], 
	  {
		A: 'technologyvalley:fire_iron',
		B: 'extendedcrafting:advanced_component',
		C: 'undergarden:regalium_block',
		D: 'undergarden:utherium_crystal'
	  }
	)
	
	
})