ServerEvents.recipes(event => {


	event.remove({output: 'generatorgalore:copper_generator'})
	event.shaped(
	  Item.of('generatorgalore:copper_generator'), 
	  [
	    'AAA',
		'ABA',
		'ACA'
	  ], 
	  {
		A: 'minecraft:copper_ingot',
		B: 'minecraft:furnace',
		C: 'actuallyadditions:iron_casing'
	  }
	)
	
	
})