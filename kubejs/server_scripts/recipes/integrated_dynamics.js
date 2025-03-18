ServerEvents.recipes(event => {


	event.remove({output: 'integrateddynamics:variable'})
	event.shaped(
	  Item.of('24x integrateddynamics:variable'), 
	  [
	    'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'integrateddynamics:crystalized_menril_chunk',
		B: 'undergarden:froststeel_ingot'
	  }
	)
	
	
})