ServerEvents.recipes(event => {

	
	event.shapeless('naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', [
		'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:other"}]',
		'aether:ambrosium_shard'
	])
	
	
	event.remove({output: 'naturesaura:bottle_two_the_rebottling'})
	event.shaped(
	  Item.of('2x naturesaura:bottle_two_the_rebottling'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:bottle_two_the_rebottling',
		B: '#minecraft:planks'
	  }
	)
	
	
	event.remove({output: 'naturesaura:gold_fiber'})
	event.shaped(
	  Item.of('4x naturesaura:gold_fiber'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'minecraft:short_grass',
		B: 'aether:ambrosium_shard',
		C: '#minecraft:leaves'
	  }
	)
	
	
	event.remove({output: 'naturesaura:offering_table'})
	event.shaped(
	  Item.of('naturesaura:offering_table'), 
	  [
	    'BCB',
		'DBE',
		'AAA'
	  ], 
	  {
		A: '#minecraft:logs',
		B: 'naturesaura:infused_stone',
		C: 'silentgear:crimson_steel_ingot',
		D: 'naturesaura:token_fear',
		E: 'naturesaura:token_sorrow'
	  }
	)
	
	
})