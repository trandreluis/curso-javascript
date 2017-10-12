var incremetar = (function() {
	var valor = 0;

	return function() {
		return ++valor;
	}
})();


console.log(incremetar());
console.log(incremetar());
console.log(incremetar());