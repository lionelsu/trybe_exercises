/* 
  1. Hora de fazermos em conjunto! 🏄‍♀️
   Agora vamos ter alguns minutos para construir um algoritmo com a seguinte descrição:
   Crie dois valores num1 e num2.
   Se os valores forem iguais some os dois
   Caso contrário multiplique num1 por num2.
   Por ultimo exiba o valor final no console.
*/

// 2.Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const num1 = 10
const num2 = 40

let resultado = 0

if (num1 === num2) {
    resultado = num1 + num2
} else {
    resultado = num1 * num2
}
console.log(resultado)


if(num1 > num2) {
    console.log(num1)
}