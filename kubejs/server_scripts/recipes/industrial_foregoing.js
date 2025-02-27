ServerEvents.recipes(event => {


	event.remove({output: 'industrialforegoing:machine_frame_pity'})
	event.shaped(
	  Item.of('industrialforegoing:machine_frame_pity'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'actuallyadditions:quintuple_battery',
		B: 'forbidden_arcanus:obsidiansteel_ingot',
		C: 'actuallyadditions:empowered_restonia_crystal_block'
	  }
	)
	
	
	event.remove({output: 'industrialforegoing:latex_processing_unit'})
	event.shaped(
	  Item.of('industrialforegoing:latex_processing_unit'), 
	  [
	    'FCF',
		'DAD',
		'FBF'
	  ], 
	  {
		A: 'industrialforegoing:machine_frame_pity',
		B: 'ironfurnaces:obsidian_furnace',
		C: 'actuallyadditions:empowered_restonia_crystal_block',
		D: 'minecraft:bucket',
		F: 'pneumaticcraft:capacitor'
	  }
	)
	
	
})