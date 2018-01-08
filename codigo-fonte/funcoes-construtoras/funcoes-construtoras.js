var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'Volksvagen';
}

var fox = new Carro('Fox', 'CPO-3333');
console.log('fox', fox);