
function verificaFibonacci(numero) {
    let a = 0
    let b = 1

    while (b <= numero) {
        if (b === numero) {
            return true
        }
        let temp = b
        b = a + b
        a = temp
    }
    
    return false 
}


let numero = 13
if (verificaFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.")
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.")
}
