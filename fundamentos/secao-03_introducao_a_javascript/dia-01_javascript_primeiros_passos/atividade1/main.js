let a = Math.floor(Math.random()*10)
let b = Math.floor(Math.random()*10)

let operadores = ['+', '-', '*', '/', '%']

for (let i = 0; i < operadores.length; i++) {
    switch (operadores[i]) {
        case '+':
            console.log(a + b)
            break;

        case '-':
            console.log(a - b)
            break;

        case '*':
            console.log(a * b)
            break;

        case '/':
            console.log(a / b)
            break;

        case '%':
            console.log(a % b)
            break;

        default:
            console.log('Nenhum operador válido')
            break;
    }
}
