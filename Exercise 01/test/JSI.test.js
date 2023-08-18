/* eslint-disable no-undef */
const {
    cadenaMasLarga
 } = require('../Exercise');
 
 describe('EJERCICIO 01 --RUN ALL TEST', function () {

    describe('isUpperCase(word)', function () {

       it('Test 01 --Caso Base', function () {
         var array = ["Deber hallar", "la palabra más larga"];      
         expect(cadenaMasLarga(array)).toBe("palabra");
       });

       it('Test 02 --Cuando hay dos palabras de longitud similar', function () {
         array = ["Propiedad o cualidad esencial",  "de los animales y las plantas",  "por la cual evolucionan", "se adaptan al medio",  "se desarrollan y se reproducen"];
         expect(["desarrollan", "evolucionan"]).toContain(cadenaMasLarga(array));
      });

      it('Test 01 --Array vacio', function () {
         var array = ["", ""];
         expect(cadenaMasLarga(array)).toBe("");
       });

    });
 });