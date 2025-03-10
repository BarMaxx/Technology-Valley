ServerEvents.recipes(event => {

	
	event.shapeless('minecraft:oak_sapling', [
		'aether:skyroot_sapling'
	])
	
	
	event.remove({output: 'minecraft:stonecutter'})
	event.shaped(
	  Item.of('minecraft:stonecutter'), 
	  [
	    '   ',
		' B ',
		'AAA'
	  ], 
	  {
		A: '#c:stones',
		B: 'minecraft:iron_ingot'
	  }
	)
	
	
	event.remove({output: 'minecraft:campfire'})
	event.shaped(
	  Item.of('minecraft:campfire'), 
	  [
	    ' C ',
		'CBC',
		'AAA'
	  ], 
	  {
		A: '#minecraft:logs',
		B: 'aether:ambrosium_shard',
		C: '#c:rods/wooden'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:campfire'), 
	  [
	    ' C ',
		'CBC',
		'AAA'
	  ], 
	  {
		A: '#minecraft:logs',
		B: 'modern_industrialization:coke',
		C: '#c:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:furnace'})
	event.shaped(
	  Item.of('minecraft:furnace'), 
	  [
	    'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: '#c:stones',
		B: 'minecraft:campfire'
	  }
	)
	
	
	event.shaped(
	  Item.of('minecraft:bucket'), 
	  [
	    '   ',
		'A A',
		' A '
	  ], 
	  {
		A: 'justdirethings:ferricore_ingot'
	  }
	)
	
	
	event.shaped(
	  Item.of('minecraft:lava_bucket'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'minecraft:bucket',
		B: 'minecraft:blaze_powder'
	  }
	)
	
	
})