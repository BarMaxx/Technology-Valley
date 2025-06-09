ServerEvents.recipes(event => {


	event.remove({output: 'create:andesite_alloy'})
	event.shaped(
	  Item.of('create:andesite_alloy'), 
	  [
	    'AB ',
		'BA ',
		'   '
	  ], 
	  {
		A: 'undergarden:cloggrum_nugget',
		B: '#chipped:andesite'
	  }
	)
	
	event.shapeless('9x create:andesite_alloy', [
		'create:andesite_alloy_block'
	])
	
	
	event.shaped(
	  Item.of('create:empty_blaze_burner'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'undergarden:regalium_block',
		B: '#c:plates/iron'
	  }
	)
	
	
})