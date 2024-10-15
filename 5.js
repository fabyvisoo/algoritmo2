function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
var numero = 7; 
var resultado = ehPrimo(numero);
console.log("O número " + numero + (resultado ? " é primo." : " não é primo."));