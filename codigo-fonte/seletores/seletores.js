$(function() {

	var checkSelecaoTodos = $('#selecao-todos-usuarios');

	var selecaoUsuarios = $('.js-selecao-usuario');

	selecaoUsuarios.on('click', function() {
		var quantidadeUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === quantidadeUsuariosSelecionados;
		checkSelecaoTodos.prop('checked', checked);
	});

	checkSelecaoTodos.on('click', function() {
		selecaoUsuarios.prop('checked', checkSelecaoTodos.prop('checked'));
	});

});