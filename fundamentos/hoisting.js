/**
 * Hoisting em JavaScript é um comportamento padrão de mover a declaração para o topo
 * funciona apenas com var
 * 
 * var a
 * console.log('a = ', a)
 * a = 2
 * console.log('a = ', a) 
 * 
 * 
 */

console.log('a = ', a)
var a = 2
console.log('a = ', a)