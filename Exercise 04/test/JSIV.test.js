/* eslint-disable no-undef */
const {
   filtrarCadenas
 } = require('../Exercise');
 
 describe('EJERCICIO 04', function () {
    describe('filtrarCadenas(words, n)', function () {
       it('Debe mostrar un array unicamente con las cadenas que su longitud sea igual a "n"', function () {
        expect(filtrarCadenas(["Hola", "me", "llamo", "Juan", "un", "gusto", "verte"], 5)).toEqual(["llamo", "gusto", "verte"]);
       });
    });
 });