ServerEvents.recipes(event => {


	event.remove({output: 'bigreactors:basic_reactorcasing'})
	event.shaped(
	  Item.of('bigreactors:basic_reactorcasing'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'pneumaticcraft:transistor',
		B: '#c:ingots/graphite',
		C: 'modern_industrialization:battery_alloy_double_ingot'
	  }
	)
	
	
})