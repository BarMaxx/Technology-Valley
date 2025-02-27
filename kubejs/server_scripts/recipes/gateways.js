ServerEvents.recipes(event => {


	event.remove({output: 'gateways:gate_pearl[gateways:gateway="gateways:basic/blaze"]'})
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:basic/blaze"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'justdirethings:blazegold_ingot'
	  }
	)
	
	
})