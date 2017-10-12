var carro = {cor: 'prata', ano: '2017', modelo: 'Civic', fabricante: 'Honda'};

// Objeto completo
console.log('Carro: ', carro);

// Tipo do da variável (object)
console.log('Type of:', typeof carro);

// Acessando valores do objeto de forma estática
console.log('Modelo:', carro.modelo);

// Acessando objeto de forma potencialmente dinâmica
console.log('Modelo', carro['modelo']);

// Alterado valor do objeto
carro.modelo = 'Corola';

// Objeto completo (verificando alteração no modelo)
console.log('Carro: ', carro);

// Alterando objeto em tempo de execução
carro.placa = 'LPB-4312';


// Objeto completo (alterado, com atributo placa a mais)
console.log(carro);

// Adicionando propriedade function
carro.ligar = function() { console.log('Ligando o carro...'); };

// Objeto completo (alterado, com atributo funcção a mais)
console.log(carro);

// Chamando função criada
carro.ligar();

// Criando pbjeto já com uma function declarada
var carro2 = {
	cor: 'azul',
	ano: '2008',
	modelo: 'Celta',
	fabricante: 'Chevrolet',
	ligar: function() {
		console.log('Ligando o carro2...');
	}
};

console.log(carro2);