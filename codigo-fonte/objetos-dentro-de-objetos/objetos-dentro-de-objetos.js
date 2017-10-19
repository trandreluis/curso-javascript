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

console.log('Cidade que o João mora:', joao.endereco.cidade);

joao.endereco.numero = 101;

// Acesso estático
console.log('Número de endereço do João:', joao.endereco.numero);

// Acesso dinâmico
console.log('Estado do João:', joao['endereco']['estado']);