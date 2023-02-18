const { myFizzBuzz } = require('../script.js')

describe('Testando a função myFizzBuzz', () => {
    it('Divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })

    it('Divisível por 3', () => {
        expect(myFizzBuzz(6)).toBe('fizz')
    })

    it('Divisível por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })

    it('Não divisível por 3 ou 5', () => {
        expect(myFizzBuzz(8)).toBe(8)
    })

    it('Parâmetro não é um número', () => {
        expect(myFizzBuzz('w')).toBe(false)
    })
})