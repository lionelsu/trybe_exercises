const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
}

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos'
}

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
}

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurn (obj, key, value) {
    obj[key] = value
    return obj
}

console.log(addTurn(lesson2, 'turno', 'noite'))

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listObjKeys(obj) {
    return Object.keys(obj)
}
console.log(listObjKeys(lesson1))

