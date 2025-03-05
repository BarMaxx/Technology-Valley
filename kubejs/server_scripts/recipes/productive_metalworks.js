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
	
	event.shaped(
	  Item.of('4x productivemetalworks:fire_clay'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'justdirethings:blazegold_ingot',
		B: 'aether:quicksoil',
		C: 'minecraft:clay_ball'
	  }
	)
	
	
	event.remove({output: 'productivemetalworks:black_foundry_controller'})
	event.shaped(
	  Item.of('productivemetalworks:black_foundry_controller'), 
	  [
	    'BBB',
		'BAB',
		'BBB'
	  ], 
	  {
		A: 'minecraft:furnace',
		B: 'productivemetalworks:fire_brick'
	  }
	)
	
	
	event.remove({output: 'productivemetalworks:liquid_heating_coil'})
	event.shaped(
	  Item.of('productivemetalworks:liquid_heating_coil'), 
	  [
	    'BBB',
		'BAB',
		'CCC'
	  ], 
	  {
		A: '#c:buckets/empty',
		B: 'justdirethings:blazegold_ingot',
		C: 'productivemetalworks:fire_brick'
	  }
	)
	
	
})