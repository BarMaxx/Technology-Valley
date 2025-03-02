ServerEvents.recipes(event => {

	
	event.shapeless('naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', [
		'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:other"}]',
		'aether:ambrosium_shard'
	])
	
	
	event.remove({output: 'naturesaura:offering_table'})
	event.shaped(
	  Item.of('naturesaura:offering_table'), 
	  [
	    'ABA',
		'FAD',
		'CCC'
	  ], 
	  {
		A: 'naturesaura:infused_stone',
		B: 'naturesaura:infused_iron',
		C: '#minecraft:logs',
		D: 'naturesaura:token_sorrow',
		F: 'naturesaura:token_fear'
	  }
	)
	
	
})