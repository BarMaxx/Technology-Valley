ServerEvents.recipes(event => {


	event.remove({output: 'aether:altar'})
	event.shaped(
	  Item.of('aether:altar'), 
	  [
	    'BBB',
		'BAB',
		'BBB'
	  ], 
	  {
		A: 'minecraft:iron_ingot',
		B: 'aether:holystone'
	  }
	)
	
	
})