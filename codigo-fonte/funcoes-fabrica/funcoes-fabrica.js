var criarCarroVolksvagen = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'Volksvagen'
	};
}

var fox = criarCarroVolksvagen('Fox', 'CPO-3333');

var gol = criarCarroVolksvagen('Gol', 'RDD-2222');

console.log('fox', fox);
console.log('gol', gol);