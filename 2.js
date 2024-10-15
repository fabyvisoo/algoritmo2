function contarVogais(string) {
    var vogais = 'aeiouAEIOU';
    var contador = 0;
    for (var i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            contador++;
        }
    }
    console.log("Número de vogais:", contador);
}
contarVogais("Morango");