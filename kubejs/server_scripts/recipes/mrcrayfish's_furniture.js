ServerEvents.recipes(event => {


	event.remove({output: 'refurbished_furniture:wrench'})
	event.shaped(
	  Item.of('refurbished_furniture:wrench'), 
	  [
	    ' C ',
		'BCC',
		'AB '
	  ], 
	  {
		A: 'minecraft:leather',
		B: 'minecraft:string',
		C: 'justdirethings:ferricore_ingot'
	  }
	)
	
	
	event.remove({output: 'refurbished_furniture:light_electricity_generator'})
	event.shaped(
	  Item.of('refurbished_furniture:light_electricity_generator'), 
	  [
	    'CCC',
		'CAC',
		'CBC'
	  ], 
	  {
		A: 'aether:ambrosium_block',
		B: 'aether:altar',
		C: 'justdirethings:ferricore_ingot'
	  }
	)
	
	
	event.remove({output: 'refurbished_furniture:workbench'})
	event.shaped(
	  Item.of('refurbished_furniture:workbench'), 
	  [
	    'DBD',
		'DAD',
		'DCD'
	  ], 
	  {
		A: 'aether:ambrosium_block',
		B: 'minecraft:stonecutter',
		C: 'justdirethings:ferricore_ingot',
		D: '#minecraft:planks'
	  }
	)
	
	
})