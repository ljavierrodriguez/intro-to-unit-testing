const { suma, resta, esMayorDeEdad, name, total } = require('../app');

describe('Pruebas Unitarias con Jest', () => {
    test('Que la funcion suma este definida', () => {
        expect(typeof (suma)).toBe('function');
    })

    test('Que la suma de 10 + 10 es 20', () => {
        expect(suma(10, 10)).toEqual(20);
    })

    test('Que la funcion resta este definida', () => {
        expect(typeof (resta)).toBe('function');
    })

    test('Que la resta de 100 - 50 es 50', () => {
        expect(resta(100, 50)).toEqual(50);
    })
})

describe('Pruebas Unitarias con Jest 2', () => {
    test('Verificar que es mayor de edad', () => {
        expect(esMayorDeEdad(21)).toBeTruthy();
    })
    test('Verificar que es menor de edad', () => {
        expect(esMayorDeEdad(18)).toBeFalsy();
    })
    test('Otros test', () => {
        expect(typeof (name)).toBe('string');
        expect(name).toEqual('Luis');
    })

    test('Validar la suma de un conjunto de valores (1,2,3,4,5) debe ser 15', () => {
        expect(total([1, 2, 3, 4, 5])).toEqual(15);
    })

    test('Validar que si no recibe valores debe retornar 0', () => {
        expect(total()).toEqual(0);
    })
})