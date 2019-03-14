/**
 * Pode se chamar a função antes mesmo de declarar ela
 * quando se declara uma 'function declaration' o interpretador
 * do JS primeiro carrega todas as funções para depois ir lendo
 * elas
 */
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression (O nome da funcao aparecerá na stacktrace em caso de erro)
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))