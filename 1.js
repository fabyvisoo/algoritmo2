function inverterNumero(numero) {
    var numeroInvertido = numero.toString().split('').reverse().join('');
    console.log("O número invertido é:", numeroInvertido);
}

inverterNumero(987)