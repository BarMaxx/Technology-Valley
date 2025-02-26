ServerEvents.recipes(event => {


	event.remove({output: 'occultism:sacrificial_bowl'})
	event.shaped(
	  Item.of('occultism:sacrificial_bowl'), 
	  [
	    '   ',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'occultism:otherstone',
		B: 'undergarden:froststeel_ingot'
	  }
	)
	
	
})