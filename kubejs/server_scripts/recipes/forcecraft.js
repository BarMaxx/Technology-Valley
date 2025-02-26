ServerEvents.recipes(event => {

	
	event.remove({output: 'forcecraft:infuser'})
	event.shaped(
	  Item.of('forcecraft:infuser'), 
	  [
	    ' C ',
		'ABA',
		'AAA'
	  ], 
	  {
		A: '#c:ingots/bronze',
		B: 'minecraft:enchanting_table',
		C: 'forcecraft:force_rod'
	  }
	)
	
	
})