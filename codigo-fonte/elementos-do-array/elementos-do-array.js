var acessorio = {som: 'Pioneer', banco: 'Couro'};

var ligar = function(marca) {
	console.log('Ligando carro da marca:', marca);
}

var fox = ['Fox', 4, acessorio, ligar];

console.log(fox);

console.log(fox[2].som);

fox[3]('Volks');