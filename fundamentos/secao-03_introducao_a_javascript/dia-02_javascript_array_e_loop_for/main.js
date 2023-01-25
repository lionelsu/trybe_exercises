//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

//Some todos os valores contidos no array e imprima o resultado;
/*let resultado = 0
for(let i = 0; i < numbers.length; i++) {
    resultado = resultado + numbers[i]
}
console.log(resultado)*/

//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

/*
let resultado2 = 0
let contador = 0
let m = 0
for(let i = 0; i < numbers.length; i++) {
    resultado2 = resultado2 + numbers[i]
    contador++
    if(contador === numbers.length) {
        m = resultado2 / numbers.length
        console.log(m)
        
        if(m > 20) {
            console.log('Valor maior que 20')
        }
    }
}
*/

/*
let contador = 0
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > contador) {
        contador = numbers[i]
    }
}

console.log(contador)*/

/*
let contador = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 1) {
        contador = contador + 1
        console.log(numbers[i])
    }
}

if(contador === 0) {
    console.log('nenhum numero impar')
} else {
    console.log(contador)
} */

/*
let contador = numbers[0]
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] < contador) {
        contador = numbers[i]
    }
}

console.log(contador)*/

let num = []

for(let i = 1; i <= 25; i++) {
    num.push(i)
}

console.log(num)

for(let i = 0; i < num.length; i++) {
    console.log(num[i] / 2)
}