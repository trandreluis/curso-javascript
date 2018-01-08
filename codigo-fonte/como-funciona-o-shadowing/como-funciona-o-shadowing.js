var volks = {
	fabricante: 'Volksvagen'
}

var fox = {
	nome: 'Fox',
	placa: 'CPO-3333'
}

console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);

for(propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}