const valor = 'Global'

function minhaFuncao() {
    console.log(valor)   
}

/**
 * Nessa função será chamada o valor da variavel que foi
 * inicializada no escopo global, pois a função minhaFuncao()
 * foi definida no contexto do arquivo ou seja ela carrega 
 * o contexto no qual ela foi escrita
 */
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()