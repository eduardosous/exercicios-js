const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Break causa um desvio de fluxo pra fora do laço corrente mais próximo
 * que no caso é o for
 */
for(let x in nums){
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

/**
 * Continue interrompe a repetição corrente e vai
 * pra próxima repetição
 */
for(let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // chama o break do for externo
        console.log(`Par = ${a},${b}`) 
    }
}