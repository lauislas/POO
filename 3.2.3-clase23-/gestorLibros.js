"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var fs = require("fs");
var Libro = /** @class */ (function () {
    function Libro(autor, titulo, cantidadPaginas) {
        this.autor = autor;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (nuevoAutor) {
        this.autor = nuevoAutor;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (nuevoTitulo) {
        this.titulo = nuevoTitulo;
    };
    Libro.prototype.getCantidadPaginas = function () {
        return this.cantidadPaginas;
    };
    Libro.prototype.setCantidadPaginas = function (cantidadPaginas) {
        this.cantidadPaginas = cantidadPaginas;
    };
    return Libro;
}());
var LectorArchivo = /** @class */ (function () {
    function LectorArchivo(archivoTxt) {
        this.archivoTxt = archivoTxt;
    }
    LectorArchivo.prototype.leerArchivo = function () {
        var archivo = fs.readFileSync(this.archivoTxt, 'utf8');
        var separar = archivo.split('\r\n');
        return separar;
    };
    return LectorArchivo;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(archivo, libros) {
        this.lectorArchivos = new LectorArchivo(archivo);
        if (libros == undefined || libros == null) {
            this.libros = new Array();
        }
        else {
            this.libros = libros;
        }
    }
    GestorLibros.prototype.insertarLibros = function () {
        var elegir = readlineSync.questionInt("Ingrese\n[1]Para crear un nuevo registro\n[2]Para cargar registro existente\nNum: ");
        switch (elegir) {
            case 1:
                var autor = readlineSync.question("Nombre del autor: ");
                var titulo = readlineSync.question("Nombre del libro: ");
                var cantDePaginas = readlineSync.questionInt("Cantidad de paginas: ");
                var nuevoLibro = new Libro(autor, titulo, cantDePaginas);
                this.libros.push(nuevoLibro);
                break;
            case 2:
                var agregar = this.lectorArchivos.leerArchivo();
                for (var i = 0; i < agregar.length; i++) {
                    var datoLibros = agregar[i].split(',');
                    var otrosLibros = new Libro(datoLibros[0], datoLibros[1], Number(datoLibros[2]));
                    this.libros.push(otrosLibros);
                }
                break;
            default:
                console.log("Ingrese opcion valida.");
                break;
        }
        console.log(this.libros);
    };
    GestorLibros.prototype.buscarRegistro = function (busqueda) {
        for (var i = 0; i < this.libros.length; i++) {
            if (busqueda == this.libros[i].getAutor()) {
                return i;
            }
        }
        return -1;
    };
    GestorLibros.prototype.mostrarLibreria = function () {
        console.log(this.libros);
    };
    GestorLibros.prototype.consultarRegistro = function () {
        var encontrar = readlineSync.question("Indique Autor a buscar: ");
        var i = this.buscarRegistro(encontrar);
        if (i != -1) {
            console.log(encontrar, "autor del libro", this.libros[i].getTitulo(), "con", this.libros[i].getCantidadPaginas(), "paginas se encuentra en la posicion", i, "del registro.");
        }
        else {
            console.log("No se registra ningun autor a nombre de", encontrar);
        }
    };
    GestorLibros.prototype.eliminarRegistro = function () {
        var borrar = readlineSync.question("Ingrese el autor para borrar su registro: ");
        var i = this.buscarRegistro(borrar);
        if (i != -1) {
            this.libros.splice(i, 1);
            console.log(this.libros);
            console.log("REGISTRO BORRADO");
        }
    };
    GestorLibros.prototype.modificarInfo = function () {
        console.log("MODIFICANDO LIBRERIA INGRESE...");
        var elegir = readlineSync.questionInt("\n[1]Para modificar autor\n[2]Para modificar nombre del libro\n[3]Para modificar cantidad de paginas\nNum: ");
        var modificar = readlineSync.question("Ingrese Autor: ");
        var ubicacion = this.buscarRegistro(modificar);
        if (ubicacion != -1) {
            switch (elegir) {
                case 1:
                    var nuevoA = readlineSync.question("Ingrese nuevo Autor: ");
                    this.libros[ubicacion].setAutor(nuevoA);
                    console.log(this.libros);
                    console.log("NOMBRE DEL AUTOR MODIFICADO");
                    break;
                case 2:
                    var nuevoL = readlineSync.question("Ingrese nuevo nombre del libro: ");
                    this.libros[ubicacion].setTitulo(nuevoL);
                    console.log(this.libros);
                    console.log("NOMBRE DEL LIBRO MODIFICADO");
                    break;
                case 3:
                    var nuevaC = readlineSync.questionInt("Ingrese nueva cantidad de paginas: ");
                    this.libros[ubicacion].setCantidadPaginas(nuevaC);
                    console.log(this.libros);
                    console.log("CANTIDAD DE PAGINAS MODIFICADO");
                    break;
                default:
                    console.log("No se encuentra informacion.");
            }
        }
    };
    return GestorLibros;
}());
var gestionarLibros = new GestorLibros('librosreg.txt');
console.log("-------------------");
menu();
function menu() {
    var elegirMenu = readlineSync.questionInt("\nIngrese..\n[1]PARA INSERTAR NUEVO LIBRO o CARGAR REGISTRO\n[2]PARA CONSULTAR AUTOR\n[3]PARA MODIFICAR INFORMACION\n[4]PARA ELIMINAR UN REGISTRO\n[5]PARA MOSTRAR LA LIBERIA\n[0]PARA SALIR\nNum: ");
    while (elegirMenu != 0) {
        switch (elegirMenu) {
            case 1:
                gestionarLibros.insertarLibros();
                break;
            case 2:
                gestionarLibros.consultarRegistro();
                break;
            case 3:
                gestionarLibros.modificarInfo();
                break;
            case 4:
                gestionarLibros.eliminarRegistro();
                break;
            case 5:
                gestionarLibros.mostrarLibreria();
                break;
            default:
                console.log("Ingrese una opción válida.");
                break;
        }
        elegirMenu = readlineSync.questionInt("\nIngrese..\n[1]PARA INSERTAR NUEVO LIBRO o CARGAR REGISTRO\n[2]PARA CONSULTAR AUTOR\n[3]PARA MODIFICAR INFORMACION\n[4]PARA ELIMINAR UN REGISTRO\n[5]PARA MOSTRAR LA LIBERIA\n[0]PARA SALIR\nNum: ");
    }
}
