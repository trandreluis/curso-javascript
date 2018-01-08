var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'Volkswagen'
}

Carro.prototype.fabricante = 'Wolkswagen';
Carro.prototype.ligar = function() {
	console.log('Ligando o carro...')
}

var fox = new Carro('Fox', 'CPO-3333');
console.log('Fox', fox);

var gol = new Carro('Gol', 'RDD-2222');
console.log('Gol', gol);

console.log('fox.fabricante', fox);
console.log('gol.fabricante', gol);

fox.ligar();