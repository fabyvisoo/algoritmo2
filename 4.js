function contarCaracteres(string, caractere) {
    var contador = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === caractere) {
            contador++;
        }
    }
    return contador;
}
var string = "exemplo de string";
var caractere = "e";
var resultado = contarCaracteres(string, caractere);
console.log("O caractere '" + caractere + "' aparece " + resultado + " vez(es) na string.");