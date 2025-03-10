ServerEvents.recipes(event => {

	
	event.remove({output: 'productivebees:centrifuge'})
	event.shaped(
	  Item.of('productivebees:centrifuge'), 
	  [
	    'A A',
		'ABA',
		'AAA'
	  ], 
	  {
		A: '#c:ingots/steel',
		B: 'minecraft:cauldron'
	  }
	)
	
	
})