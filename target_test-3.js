// a) 1, 3, 5, 7,...
function proximoElementoA() {
    let ultimoElemento = 7;
    let proximoElemento = ultimoElemento + 2;
    return proximoElemento;
}

// b) 2, 4, 8, 16, 32, 64,...
function proximoElementoB() {
    let ultimoElemento = 64;
    let proximoElemento = ultimoElemento * 2;
    return proximoElemento;
}

// c) 0, 1, 4, 9, 16, 25, 36...
function proximoElementoC() {
    let ultimoElemento = 36;
    let proximoElemento = Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
    return proximoElemento;
}

// d) 4, 16, 36, 64,...
function proximoElementoD() {
    let ultimoElemento = 64;
    let proximoElemento = Math.pow(Math.sqrt(ultimoElemento) + 2, 2);
    return proximoElemento;
}

// e) 1, 1, 2, 3, 5, 8,...
function proximoElementoE() {
    let penultimoElemento = 5;
    let ultimoElemento = 8;
    let proximoElemento = penultimoElemento + ultimoElemento;
    return proximoElemento;
}

// f) 2, 10, 12, 16, 17, 18, 19,...
function proximoElementoF() {
    let ultimoElemento = 19;
    let proximoElemento = ultimoElemento + 1;
    return proximoElemento;
}


console.log("a) Próximo elemento:", proximoElementoA());
console.log("b) Próximo elemento:", proximoElementoB());
console.log("c) Próximo elemento:", proximoElementoC());
console.log("d) Próximo elemento:", proximoElementoD());
console.log("e) Próximo elemento:", proximoElementoE());
console.log("f) Próximo elemento:", proximoElementoF());
