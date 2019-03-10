/**
 * Passagem de atribuição de valor, quando se é tipo primitivo
 * faz uma cópia por valor
 * c = 3
 * d = c
 * d++
 * console.log(c)
 * console.log(d)
 * 
 * A saida sera 
 * 3 
 * 4
 * 
 * Passagem de atribuição por referencia, faz uma cópia do endereço em memória
 * e a variavel ou constante passa a apontar para o mesmo lugar
 * 
 * A constante 'a' possui o endereço no qual o objeto está localizado na memória
 * const a = {nome: 'Teste'} 
 * console.log(a)
 * 
 * {name: "Teste"} // Resultado
 * 
 * Tanto a contante 'b' como 'a' estão apontando para o mesmo objeto na memória,
 * ambos possuem a mesma referencia para o objeto
 * const b = a
 * 
 * A partir da constante 'b' foi mudado o valor do atributo name
 * b.name = 'Teste2'
 * console.log(b)
 * 
 * {name: "Teste2"}
 * 
 * Como 'a' tem a mesma referencia, ela sofre a alteração
 * console.log(a)
 * 
 * {name: "Teste2"}
 */

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor, não aponta pra nenhum lugar da memória
console.log(valor)
// console.log(valor.toString) // ERRO!
console.log(typeof valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined de forma explicita
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)