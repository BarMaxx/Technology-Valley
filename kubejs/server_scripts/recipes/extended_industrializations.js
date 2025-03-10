ServerEvents.recipes(event => {


	event.remove({output: 'extended_industrialization:steel_alloy_smelter'})
	event.shaped(
	  Item.of('extended_industrialization:steel_alloy_smelter'), 
	  [
	    'FDG',
		'CAC',
		'BBB'
	  ], 
	  {
		A: 'modern_industrialization:steel_machine_casing',
		B: '#modern_industrialization:fluid_pipes',
		C: '#c:plates/invar',
		D: 'modern_industrialization:bronze_rotor',
		F: 'jitl:crystal_flake',
		G: 'undergarden:froststeel_ingot'
	  }
	)
	
	
})