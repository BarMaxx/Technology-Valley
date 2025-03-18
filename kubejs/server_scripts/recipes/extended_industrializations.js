ServerEvents.recipes(event => {


	event.remove({output: 'extended_industrialization:steel_alloy_smelter'})
	event.shaped(
	  Item.of('extended_industrialization:steel_alloy_smelter'), 
	  [
	    'GDG',
		'CAC',
		'BBB'
	  ], 
	  {
		A: 'modern_industrialization:steel_machine_casing',
		B: '#modern_industrialization:fluid_pipes',
		C: '#c:plates/invar',
		D: 'modern_industrialization:bronze_rotor',
		G: 'undergarden:froststeel_ingot'
	  }
	)
	
	
})