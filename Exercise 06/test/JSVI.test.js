/* eslint-disable no-undef */
const {
    isUpperCase
 } = require('../Exercise');
 
 describe('EJERCICIO 01', function () {
    describe('isUpperCase(word)', function () {
       it('true si es mayuscula sino false', function () {
        expect(isUpperCase("HOLA")).toBe(true);
       });
    });
 });