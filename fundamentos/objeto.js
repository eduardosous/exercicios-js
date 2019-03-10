/**
 * Objeto em JavaScript é uma coleção de chave e valor
 * e pode ser criado dinamicamente 
 * 
 * O par de chaves representa um objeto
 */
const prod1 = {}
// Aqui o nome é o identificador(chave) do objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

/**
 * Forma literal de se criar um objeto
 */
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

/**
 * Exemplo de JSON (JavaScrip Object Notation)
 * JSON tem um formato textual, portanto é
 * diferente de objeto
 */
'{"nome": "Camisa Polo", "preco": 79.90}'


console.log(prod2)