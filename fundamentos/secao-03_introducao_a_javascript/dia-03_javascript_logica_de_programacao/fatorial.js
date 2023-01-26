const num = 10

let fatorial = num
for (let i = 1; i < num; i++) {
    fatorial = fatorial * (num - i)
}

console.log(fatorial)