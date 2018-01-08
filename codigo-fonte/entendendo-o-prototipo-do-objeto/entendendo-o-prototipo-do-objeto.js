var volks = {
	fabricante: 'Volkswagen'
}

var fox = {
	nome:  'Fox',
	placa: 'JKE-1212',
}

var voyage = {
	nome:  'voyage',
	placa: 'JGE-4987',
	__proto__: volks
}

var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'LPO-1239';

//var gol = {
//	nome: 'Gol',
//	placa: 'LPO-1239',
//	prototype: volks
//}

console.log('fox', fox);
console.log('gol', gol);

console.log(Object.setPrototypeOf(fox, volks));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);
console.log('voyage.fabricante', voyage.fabricante);