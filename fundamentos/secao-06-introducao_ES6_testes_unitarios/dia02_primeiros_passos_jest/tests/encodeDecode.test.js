const { encode, decode } = require('../script.js')

describe('Testando encode e decode', () => {
    it('encode é uma função?', () => {
        expect(typeof encode).toEqual('function')
    })

    it('decode é uma função?', () => {
        expect(typeof decode).toEqual('function')
    })

    it('encode converte as vogais para números', () => {
        expect(encode('crystynna')).toBe('crystynn1')
    })

    it('decode converte os números para vogais', () => {
        expect(decode('crystynn1')).toBe('crystynna')
    })

    it('encode converte outras vogais', () => {
        expect(encode('sequoia')).toBe('s2q5431')
    })

    it('decode converte outros números', () => {
        expect(decode('s2q5431')).toBe('sequoia')
    })
})