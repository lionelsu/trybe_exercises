// importando com desctructuring
const { myRemove } = require('../script.js')

// começando os testes
describe('Exercício 1 - testando a função myRemove', () => {
    it('Retorna o array sem o item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})