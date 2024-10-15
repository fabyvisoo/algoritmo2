function calcularFatorial(numero) {
    if (numero < 0) {
        return "Fatorial não definido para números negativos.";
    } 
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }  
    return fatorial;
}
var resultado = calcularFatorial(5);
console.log("O fatorial é:", resultado);
