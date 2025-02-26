ServerEvents.recipes(event => {


	event.remove({output: 'immersiveengineering:alloybrick'})
	event.shaped(
	  Item.of('4x immersiveengineering:alloybrick'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'xycraft_machines:machine_base',
		B: '#c:sandstone/blocks',
		C: 'minecraft:brick'
	  }
	)
	
	
})