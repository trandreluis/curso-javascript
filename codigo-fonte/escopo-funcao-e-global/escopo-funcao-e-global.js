// escopo global
var nome = 'Hyperactive JR';

var capitalizar = function() {
	// variavel local desta função
	var nome = 'Hyperactive JR'.toUpperCase();
}

capitalizar();

console.log('nome', nome);

var capitalizar2 = function() {
	//variável global
	nome = 'Hyperactive JR'.toUpperCase();
}

capitalizar2();

console.log('nome2', nome);