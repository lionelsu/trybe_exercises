let word = 'tryber';
let palavraInvertida = ''
/*
palavraInvertida = word.split('').reverse().join('')
*/

for (let i = 0; i < word.length; i++) {
    palavraInvertida = palavraInvertida + word[word.length - 1 - i]
}

console.log(palavraInvertida)
