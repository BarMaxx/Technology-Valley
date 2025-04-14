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
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:first_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'aether:ambrosium_shard'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:second_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'aether:zanite_gemstone'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:third_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'justdirethings:ferricore_ingot'
	  }
	)
	
	
})