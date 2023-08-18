/* 
---------------CREAR UN CLASE LIBRO-----------------------
Se presenta el esquema de la clase junto a su constructor y algunos métodos, usted debe:
- Inicializar sus atributos de la clase Libro recibidos por parámetro en el método
  constructor.
- Implemente las funciones (get) que retornen cada uno de los atributos de clase Libro.
- Implemente la funcion addTraduccion(value), que recibe un string con el nuevo idioma que
  debe agregar, como un objeto, al array traducciones.
Recibido.
    Ejemplo:
    LIBRO {
      titulo: "La ciudad y los perros",
      autor: "Mario Vargas Llosa".
      traducciones = [{idioma: "Frances"},]
    }
    RESULTADO ESPERADO
      getTitulo() --> "La ciudad y los perros"
      getAutor() --> "Mario Vargas Llosa"
      getTraducciones() --> ["Frances"]
      --
      getAdd(value) donde:  value = "Ruso" --> traducciones = [{idioma: "Frances"}, {idioma: "Ruso"} ]
      getTraducciones() --> ["Frances", "Ruso"]
            

*/


function crearLibro() {
    class Libro {
        constructor(titulo, autor, traducciones) {
            /* Code Here */
        }
        getTitulo() {
            /* Code here */
        }
        getAutor() {
            /* Code here */
        }
        getTraducciones() {
            /* Code here */
        }
        addTraduccion(value) {
            /* Code here */
        }
    }
    return Libro;
}





module.exports = {
    crearLibro
};


