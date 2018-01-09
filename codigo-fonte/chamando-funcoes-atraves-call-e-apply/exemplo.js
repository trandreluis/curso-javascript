function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
}

// var fox = new Carro('Fox', 'CPO-3333');
var fox = {};
var gol = {};

Carro.call(fox, 'Fox', 'CPO-3333');
Carro.apply(gol, ['Gol', 'RDD-2222']);

console.log('Fox', fox);
console.log('Gol', gol);