// Exercício 1
function myRemove(arr, item) {
    let newArr = []
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index])
        }
    }
    return newArr
}

// Exercício 2
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
    if (num % 3 === 0) return 'fizz'
    if (num % 5 === 0) return 'buzz'
    return num
}

// Exercício 3
const mapString = (objectMap, string) => {
    const splitString = string.split('')
    const mappedArray = []
    for (let index = 0; index < splitString.length; index += 1) {
        const character = splitString[index]
        const mappedValue = objectMap[character]

        if (mappedValue) {
            mappedArray.push(mappedValue)
        } else {
            mappedArray.push(character)
        }
    }
    return mappedArray.join('')
}
const encode = (string) => {
    const map = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }
    return mapString(map, string)
}
const decode = (string) => {
    const map = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u'
    }
    return mapString(map, string)
}

// Exercício 4
function techList(stacks, name) {
    if (stacks.length === 0) {
        return 'Vazio!'
    }

    const myStack = []
    stacks.sort()
    for (let i = 0; i < stacks.length; i += 1) {
        myStack.push({
            tech: stacks[i],
            name: name
        })
    }

    return myStack
}

// Exercício 5

function hydrate(drink) {
    const total = drink
        .split('')
        .reduce((acumulador, atual) => acumulador + (parseInt(atual) || 0), 0)
        /*|| 0 <- trata caso o caractere não for um número), 0 <-valor inicial da soma)*/

    const copo = total === 1 ? 'copo' : 'copos'

    return `${total} ${copo} de água`
}

// exportando
module.exports = { myRemove, myFizzBuzz, encode, decode, techList, hydrate }
