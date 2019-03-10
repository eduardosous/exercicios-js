{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

/** 
 * A variavel var, ficara visivel apenas dentro do escopo da funcao 
*/
function teste(){
    var local = 123
}

teste()
console.log(local)