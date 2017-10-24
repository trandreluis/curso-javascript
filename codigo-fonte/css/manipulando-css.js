$(function() {

	var checkSelecaoTodos = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	selecaoUsuarios.on('click', function() {
		var quantidadeUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === quantidadeUsuariosSelecionados;
		checkSelecaoTodos.prop('checked', checked);
	});

	checkSelecaoTodos.on('click', function() {
		selecaoUsuarios.prop('checked', checkSelecaoTodos.prop('checked'));
		estilizarLinhaUsuarios();
	});

	selecaoUsuarios.on('change', function(evento) {
		estilizarLinhaUsuarios();		
	});

});