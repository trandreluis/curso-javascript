// function declaration

function somar(a, b) {
	return a + b;
}

// function expression

var subtrair = function(a, b) {
	return a - b;
}

var soma = somar(2, 3);
console.log('Soma de 2 + 3 = ', soma);

var subtracao = subtrair(8, 2);
console.log('Subtração de 8 - 2 = ', subtracao);