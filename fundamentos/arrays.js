/**
 * Arrays em JavaScript são tipos de dados dinamicos
 * ele cresce e diminiu a partir do momento que se vai
 * add novos elementos e excluindo elementos
 * É também uma estrutura indexada, heterogenia e se pode
 * misturar dados apesar de não ser uma boa prática
 */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

/**
 * O método push, add novos elementos no array
 */
valores.push({id: 3}, false, null, 'teste') 
console.log(valores)

/**
 * O método pop retira elemenos do final do array
 */
console.log(valores.pop())
/**
 * Deleta o elemento do array
 * Funciona no contexto de objeto,
 * para tirar o atributo de dentro do objeto
 */
delete valores[0]
console.log(valores)

console.log(typeof valores)