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
	
	
	event.remove({output: 'justdirethings:gooblock_tier3'})
	event.shaped(
	  Item.of('justdirethings:gooblock_tier3'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'justdirethings:gooblock_tier2',
		B: 'minecraft:dragon_breath',
		C: 'enderio:energetic_alloy_ingot',
		D: '#c:ender_pearls'
	  }
	)
	
	
	event.remove({output: 'justdirethings:gooblock_tier4'})
	event.shaped(
	  Item.of('justdirethings:gooblock_tier4'), 
	  [
	    'DCD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'justdirethings:gooblock_tier3',
		B: 'mekanism:teleportation_core',
		C: 'minecraft:sculk_shrieker',
		D: 'minecraft:sculk'
	  }
	)
	
	
})