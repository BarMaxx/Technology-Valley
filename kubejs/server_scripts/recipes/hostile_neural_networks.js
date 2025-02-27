ServerEvents.recipes(event => {


	event.remove({output: 'hostilenetworks:sim_chamber'})
	event.shaped(
	  Item.of('hostilenetworks:sim_chamber'), 
	  [
	    'GBG',
		'FAF',
		'DCD'
	  ], 
	  {
		A: 'industrialforegoing:machine_frame_simple',
		B: '#c:glass_panes',
		C: 'pneumaticcraft:transistor',
		D: 'actuallyadditions:empowered_palis_crystal',
		F: '#c:ender_pearls',
		G: 'forbidden_arcanus:deorum_ingot'
	  }
	)
	
	
	event.remove({output: 'hostilenetworks:loot_fabricator'})
	event.shaped(
	  Item.of('hostilenetworks:loot_fabricator'), 
	  [
	    'GBG',
		'FAF',
		'DCD'
	  ], 
	  {
		A: 'industrialforegoing:machine_frame_simple',
		B: 'actuallyadditions:quintuple_battery',
		C: 'pneumaticcraft:transistor',
		D: 'actuallyadditions:empowered_palis_crystal',
		F: '#c:ender_pearls',
		G: 'allthemodium:allthemodium_ingot'
	  }
	)
	
	
})