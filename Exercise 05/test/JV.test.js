/* eslint-disable no-undef */
const {
    añadirFuncion
 } = require('../Exercise');
 
 describe('EJERCICIO 05', function () {
    describe('añadirFuncion(cb)', function () {
       it('Verificacion si se agrego correctamente el metodo filtroPersonalizado al array', function () {
         var a = [1, 2, 3]
         añadirFuncion(function (lista) {
            return lista.filter(n => n > 1)
         });
        a = a.filtroPersonalizado();
        expect(a).toEqual([2, 3]);
       });
       it('Realizamos un filtro para ver si ejecuta correctamente -- Prueba', function () {
        var b = [1, 2, 3]
        añadirFuncion(function (lista) {
           return lista.filter(n => n > 2)
        });
       b = b.filtroPersonalizado();
       expect(b).toEqual([3]);
      });
    });
 });