/*const a = 50
const b = 40
const c = 60

let adicao = a+b
let subtracao = a-b
let multiplicacao = a*b
let divisao = a/b
let modulo = a%b*/

//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
/*if(a > b) {
    console.log(`A é maior`)
} else {
    console.log(`B é maior`)
}*/

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
/*if(a > b && a > c) {
    console.log(`A é maior`)
} else if(b > a && b > c) {
    console.log(`B é maior`)
} else {
    console.log(`C é maior`)
}*/

//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/*if(a > b) {
    console.log('positive')
} else if(a === b) {
    console.log('zero')
} else {
    console.log('negative')
}*/

//Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

/*let somaAngulos = a + b + c
let todosAngulosPositivos = a > 0 && b > 0 && c > 0

if(todosAngulosPositivos) {
    if(somaAngulos === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log('angulo inválido')
}*/

/*let peca = 'BISPO'
peca.toLowerCase()

switch (peca.toLowerCase()) {
    case 'bispo':
        console.log('move nas diagonais')
        break;

    default:
        console.log('Peca inválida')
        break;
}*/

/*let nota = 80

if(nota < 0 || nota > 100) {
    console.log('nota incorreta')
} else if(nota >= 90) {
    console.log('A')
} else if(nota >= 80) {
    console.log('B') 
} else if(nota >= 70) {
    console.log('B')
} else if(nota >= 60) {
    console.log('D') 
} else if(nota >= 50) {
    console.log('E')
} else {
    console.log('F')
}*/

/*if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true)
} else {
    false
}*/

/*const produto = 100

const produtoVenda = 140

if(produto >= 0 && produtoVenda >= 0) {
    const produtoValorTotal = produto * 1.20
    const totalLucro = ((produtoVenda - produtoValorTotal) * 1000)
    console.log(totalLucro)
} else {
    console.log('O produto precisa ter um valor maior que zero.')
}*/
//descontos

/*let aliquataINSS
let IR
let salarioB = 3000.00
if(salarioB <= 1556.94) {
    aliquataINSS = 0.08
} else if(salarioB <= 2594.92) {
    aliquataINSS = salarioB * 0.09
} else if(salarioB <= 5189.82) {
    aliquataINSS = salarioB * 0.11
} else {
    aliquataINSS = 570.88
}*/