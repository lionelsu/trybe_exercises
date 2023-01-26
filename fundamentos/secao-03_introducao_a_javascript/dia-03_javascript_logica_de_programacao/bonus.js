let n = 9
let simbolo = '*'
let linha = ''
let posicao = n
let meio = (n + 1) / 2
let controleEsquerdo = meio
let controleDireito = meio

let divisor = 1
let num = 47

for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        divisor += 1
    }
}

if (divisor === 2) {
    console.log(num + ' é primo')
} else {
    console.log(num + ' não é primo')
}


/*
for (let linhaIndice = 1; linhaIndice <= meio; linhaIndice += 1) {
    let saida = '';
    for(let colunaIndice = 1; colunaIndice <= n; colunaIndice += 1) {
        if (colunaIndice === controleEsquerdo || colunaIndice === controleDireito || linhaIndice === meio) {
            saida += simbolo
        } else {
            saida += ' '
        }
    }

    controleEsquerdo -= 1
    controleDireito += 1
    console.log(saida)
}*/

/*
for (let linhaIndice = 0; linhaIndice < n; linhaIndice += 1) {
    for (let colunaIndice = 0; colunaIndice < n; colunaIndice += 1) {
        if (colunaIndice < posicao) {
            linha = linha + ' '
        } else {
            linha = linha + simbolo
        }
    }

    console.log(linha);
    linha = '';
    posicao -= 1;
}
*/

/*
for(let i = 0; i < n; i++) {
    linha = linha + simbolo
}

for(let i = 0; i < n; i++) {
    console.log(linha)
}

console.log(linha)
*/

/*
for (let i = 0; i < n; i++) {
    console.log(retangulo)
    retangulo = retangulo + simbolo
}*/