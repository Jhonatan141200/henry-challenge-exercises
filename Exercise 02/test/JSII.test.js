/* eslint-disable no-undef */
const {
    mayorMenor
 } = require('../Exercise');
 
 describe('EJERCICIO 02', function () {
    describe('mayorMenor(arrays)', function () {
       it('Test 01 --Base Case', function () {
        expect(mayorMenor([3, 6, 12, 34, 15, 1])).toEqual([34, 1]);
       });
       it('Test 02 --Numero son iguales', function () {
         expect(mayorMenor([3, 1, 12, 35, 12, 1])).toEqual([35, 1]);
        });
        it('Test 03 --Hay un NaN', function () {
         expect(mayorMenor([3, NaN, 1, 12, 35, 1])[0]).toEqual(35);
         expect(mayorMenor([3, NaN, 1, 12, 35, 1])[1]).toEqual(1);
        });
    });
 });