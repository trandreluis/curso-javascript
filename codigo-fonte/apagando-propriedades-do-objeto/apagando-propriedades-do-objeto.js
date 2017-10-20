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

console.log(joao);

delete joao.endereco

console.log(joao);

delete joao['idade'];

console.log(joao);