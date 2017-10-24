$(function() {
	
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(estados) {
		estados.forEach(function(elemento) {
			console.log(elemento);
		});
	});

	resposta.fail(function(estados) {
		console.log('Ocorreu um erro ao carregar os estados do servidor');
	});

});