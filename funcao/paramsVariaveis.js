/**
 * Quando não passar parametros para a função
 * mesmo assim é possivel recuperar esses parametros
 * dentro da função atraves da propriedade arguments
 */
function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))