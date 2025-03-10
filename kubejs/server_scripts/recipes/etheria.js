ServerEvents.recipes(event => {

	
	event.remove({output: 'etheria:ether_altar'})
	event.shaped(
	  Item.of('etheria:ether_altar'), 
	  [
	    'CBC',
		'DAD',
		'ABA'
	  ], 
	  {
		A: 'minecraft:chiseled_polished_blackstone',
		B: 'minecraft:blackstone',
		C: 'etheria:ether_ingot',
		D: 'naturesaura:sky_ingot'
	  }
	)
	
	
})