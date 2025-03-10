ServerEvents.recipes(event => {


	event.remove({output: 'extendedcrafting:black_iron_ingot'})	
	event.shapeless('2x extendedcrafting:black_iron_ingot', [
		'#c:ingots/steel',
		'#c:dyes/black'
	])
	
	
})