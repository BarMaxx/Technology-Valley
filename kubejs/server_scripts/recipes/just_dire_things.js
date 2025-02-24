ServerEvents.recipes(event => {


	event.remove({output: 'justdirethings:gooblock_tier1'})
	event.shaped(
	  Item.of('justdirethings:gooblock_tier1'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'aether:aether_dirt',
		B: 'minecraft:rotten_flesh',
		C: 'minecraft:sugar',
		D: 'minecraft:clay_ball'
	  }
	)
	
	
})