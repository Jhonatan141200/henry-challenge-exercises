/* eslint-disable no-undef */
const {
    crearLibro
 } = require('../Exercise');
 
 describe('EJERCICIO 03', function () {
   describe('crearLibro()', function () {
      it('Debe retornar una clase Libro con las propiedades "titulo", "autor", "traducciones"', function () {
         const Libro = crearLibro();
         const libro = new Libro('Cien Años de Soledad',  'Gabriel Garcia Marquez', [
            {idioma: "Ingles"}, {idioma: "Frances"}, {idioma: "Ruso"}]);
         expect(libro.titulo).toBe('Cien Años de Soledad');
         expect(libro.autor).toBe('Gabriel Garcia Marquez');
         expect(libro.traducciones).toEqual([{idioma: "Ingles"}, {idioma: "Frances"}, {idioma: "Ruso"}]);
      });
      it('getTitulo() Debe retornar el "titulo" del libro', function () {
         const Libro = crearLibro();
         const libro = new Libro('Cien Años de Soledad',  'Gabriel Garcia Marquez', []);
         expect(libro.getTitulo()).toBe('Cien Años de Soledad');
      });
      it('getAuthor() Debe retornar el "autor" del libro', function () {
         const Libro = crearLibro();
         const libro = new Libro('Cien Años de Soledad',  'Gabriel Garcia Marquez', []);
         expect(libro.getAutor()).toBe('Gabriel Garcia Marquez');
      });
      it('getTraducciones() Debe retornar una lista de string con las traducciones', function () {
         const Libro = crearLibro();
         const libro = new Libro('Cien Años de Soledad',  'Gabriel Garcia Marquez', [
            {idioma: "Ingles"}, {idioma: "Frances"}, {idioma: "Ruso"}]);
         expect(libro.getTraducciones()).toEqual(["Ingles", "Frances", "Ruso"]);
      });
      it('addTraduccion() Debe agregar un objeto traduccion al a la prop. "traducciones" del Libro', function () {
         const Libro = crearLibro();
         const libro = new Libro('Cien Años de Soledad',  'Gabriel Garcia Marquez', [
            {idioma: "Ingles"}, {idioma: "Frances"}, {idioma: "Ruso"}]);
         libro.addTraduccion("Aleman");
         expect(libro.getTraducciones()).toEqual(["Ingles", "Frances", "Ruso", "Aleman"]);
      });

   });
});
 