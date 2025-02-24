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
	
	
})