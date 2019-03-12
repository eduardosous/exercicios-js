function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

/**
 * Usar while quando se tem uma situação onde não sabe o
 * número de determinadas repetições ou seja, o numero de
 * determinados elementos que se precisa inteirar,
 * Enquanto for verdadeiro ele vai executar até dar falso
 * e sair do laço.
 */
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')