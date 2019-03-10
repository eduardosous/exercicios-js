let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
/**! significa NOT
 * (!true) vai retornar false
 * (!false) vai retornar true
 * (!!true) vai retornar true
 * (!!false) vai retornar false
 */
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!' ')
console.log(!![]) // Mesmo um array vazio, representa um valor verdadeiro
console.log(!!{}) // Objeto literal
console.log(!!Infinity)
/**
 * Se o valor na variavel for resolvivel para veradeiro
 * o resultado será verdadeiro
 * No caso não é testado se a atribuição deu certo ou não
 * Se colocar 0 o retorno será false
 */
console.log(!!(isAtivo = true)) 

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia é igual a falso
console.log(!!null)
console.log(!!NaN) // Not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))



