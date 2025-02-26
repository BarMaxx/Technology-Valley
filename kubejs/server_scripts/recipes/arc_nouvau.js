ServerEvents.recipes(event => {


	event.remove({output: 'ars_nouveau:scribes_table'})
	event.shaped(
	  Item.of('ars_nouveau:scribes_table'), 
	  [
	    'AAA',
		'B B',
		'A A'
	  ], 
	  {
		A: 'evilcraft:reinforced_undead_planks',
		B: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'ars_nouveau:imbuement_chamber'})
	event.shaped(
	  Item.of('ars_nouveau:imbuement_chamber'), 
	  [
	    'ABA',
		'A A',
		'ABA'
	  ], 
	  {
		A: 'evilcraft:reinforced_undead_planks',
		B: 'minecraft:gold_ingot'
	  }
	)
	
	
})