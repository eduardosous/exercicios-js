// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/**
 * Destructuring tira os atributos de dentro da estrutura do objeto
 */
const { nome, idade} = pessoa
console.log(nome, idade)

/**
 * Pode se definir outro nome para o atributo
 */
const { nome: n, idade: i} = pessoa
console.log(n, i)

/**
 * Caso o atributo não exista dentro do objeto, pode se definir
 * um valor padrao
 */
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

/**
 * Como o atributo cep não existe na estrutura do objeto
 * ele irá retornar como undefined
 */
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)