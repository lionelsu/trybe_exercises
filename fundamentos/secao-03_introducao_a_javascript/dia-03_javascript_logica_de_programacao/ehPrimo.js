let maiorprimo = 0

for (let i = 2; i <= 50; i++) {
    let ehPrimo = true
    for(let divisor = 2; divisor < i; divisor++) {
        if(i % divisor === 0) {
            ehPrimo = false
        }
    }

    if(ehPrimo) {
        maiorprimo = i
    }
}

console.log(maiorprimo)