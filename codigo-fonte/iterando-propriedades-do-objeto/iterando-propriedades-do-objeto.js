var joao = {
	nome: 'André',
	idade: '20',
	endereco: {
		logradouro: 'Rua Antão Alves',
		numero: '118',
		complemento: 'Casa',
		cidade: 'Sertânia',
		estado: 'Pernambuco'
	}
}

for (var propriedade in joao) {
	console.log(propriedade, joao[propriedade]);
}