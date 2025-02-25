ServerEvents.recipes(event => {


	event.remove({output: 'productivemetalworks:fire_clay'})
	event.shaped(
	  Item.of('4x productivemetalworks:fire_clay'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'justdirethings:blazegold_ingot',
		B: '#c:sands',
		C: 'minecraft:clay_ball'
	  }
	)
	
	
})