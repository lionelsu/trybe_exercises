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
console.log(listObjKeys(lesson2))

// Crie uma função para mostrar o tamanho de um objeto.
function showObjLength(obj) {
    return Object.keys(obj).length
}
console.log(showObjLength(lesson2))


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function showObjValues(obj) {
    return Object.values(obj)
}
console.log(showObjValues(lesson2))

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 
function allLessons() {
    const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
    return allLessons
}
console.log(allLessons())

// Mesma coisa mas usando destructuring
function allLessonsD() {
    const allLessonsD = { lesson1, lesson2, lesson3 }
    return allLessonsD
}
console.log(allLessonsD())

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
