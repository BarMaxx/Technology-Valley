ServerEvents.recipes(event => {


	event.remove({output: 'forbidden_arcanus:arcane_polished_darkstone_slab'})
	event.shaped(
	  Item.of('6x forbidden_arcanus:arcane_polished_darkstone_slab'), 
	  [
	    ' B ',
		'AAA',
		' B '
	  ], 
	  {
		A: 'forbidden_arcanus:arcane_polished_darkstone',
		B: 'forbidden_arcanus:corrupti_dust'
	  }
	)
	
	
})