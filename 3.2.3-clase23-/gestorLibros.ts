import * as readlineSync from "readline-sync"
import * as fs from 'fs';

class Libro {
    private autor: string;
    private titulo: string;
    private cantidadPaginas: number;

    public constructor(autor: string, titulo: string, cantidadPaginas: number) {
        this.autor = autor;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }

    public getAutor(): string {
        return this.autor;
    }
    public setAutor(nuevoAutor: string): void {
        this.autor = nuevoAutor;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(nuevoTitulo: string): void {
        this.titulo = nuevoTitulo;
    }
    public getCantidadPaginas(): number {
        return this.cantidadPaginas;
    }
    public setCantidadPaginas(cantidadPaginas: number): void {
        this.cantidadPaginas = cantidadPaginas;
    }
}

class LectorArchivo { //carga archivo de texto
    private archivoTxt: string;

    constructor(archivoTxt: string) {
        this.archivoTxt = archivoTxt;
    }
    public leerArchivo(): string[] {
        let archivo: string = fs.readFileSync(this.archivoTxt, 'utf8');
        let separar: string[] = archivo.split('\r\n');
        return separar;
    }
}

class GestorLibros {
    private lectorArchivos: LectorArchivo;
    private libros: Libro[];
    public constructor(archivo: string, libros?: Libro[]) {
        this.lectorArchivos = new LectorArchivo(archivo);
        if (libros == undefined || libros == null) {
            this.libros = new Array();
        }
        else {
            this.libros = libros;
        }
    }

    public insertarLibros(): void {
        let elegir: number = readlineSync.questionInt("Ingrese\n[1]Para crear un nuevo registro\n[2]Para cargar registro existente\nNum: ");
        switch (elegir) {
            case 1:
                let autor: string = readlineSync.question("Nombre del autor: ")
                let titulo: string = readlineSync.question("Nombre del libro: ")
                let cantDePaginas: number = readlineSync.questionInt("Cantidad de paginas: ")
                let nuevoLibro = new Libro(autor, titulo, cantDePaginas);
                this.libros.push(nuevoLibro);
                break;
            case 2:
                let agregar: string[] = this.lectorArchivos.leerArchivo();
                for (let i: number = 0; i < agregar.length; i++) {
                    let datoLibros: string[] = agregar[i].split(',');
                    let otrosLibros = new Libro(datoLibros[0], datoLibros[1], Number(datoLibros[2]));
                    this.libros.push(otrosLibros);
                }
                break;
            default:
                console.log("Ingrese opcion valida.");
                break;
        }
        console.log(this.libros);
    }

    public buscarRegistro(busqueda: string): number {

        for (let i: number = 0; i < this.libros.length; i++) {
            if (busqueda == this.libros[i].getAutor()) {
                return i;
            }
        }
        return -1;
    }

    public mostrarLibreria():void{
        console.log(this.libros);
    }

    public consultarRegistro(): void {
        let encontrar: string = readlineSync.question("Indique Autor a buscar: ");
        let i: number = this.buscarRegistro(encontrar);
        if (i != -1) {
            console.log(encontrar, "autor del libro", this.libros[i].getTitulo(), "con", this.libros[i].getCantidadPaginas(), "paginas se encuentra en la posicion", i, "del registro.");
        } else {
            console.log("No se registra ningun autor a nombre de", encontrar);
        }
    }
    public eliminarRegistro(): void {
        let borrar: string = readlineSync.question("Ingrese el autor para borrar su registro: ");
        let i: number = this.buscarRegistro(borrar);
        if (i != -1) {
            this.libros.splice(i, 1);
            console.log(this.libros);
            console.log("REGISTRO BORRADO");
        }
    }
    public modificarInfo(): void {
        console.log("MODIFICANDO LIBRERIA INGRESE...")
        let elegir: number = readlineSync.questionInt("\n[1]Para modificar autor\n[2]Para modificar nombre del libro\n[3]Para modificar cantidad de paginas\nNum: ");
        let modificar: string = readlineSync.question("Ingrese Autor: ");
        let ubicacion: number = this.buscarRegistro(modificar);
        if (ubicacion != -1) {
            switch (elegir) {
                case 1:
                    let nuevoA: string = readlineSync.question("Ingrese nuevo Autor: ");
                    this.libros[ubicacion].setAutor(nuevoA);
                    console.log(this.libros);
                    console.log("NOMBRE DEL AUTOR MODIFICADO");
                    break;
                case 2:
                    let nuevoL: string = readlineSync.question("Ingrese nuevo nombre del libro: ");
                    this.libros[ubicacion].setTitulo(nuevoL);
                    console.log(this.libros);
                    console.log("NOMBRE DEL LIBRO MODIFICADO");
                    break;

                case 3:
                    let nuevaC: number = readlineSync.questionInt("Ingrese nueva cantidad de paginas: ");
                    this.libros[ubicacion].setCantidadPaginas(nuevaC);
                    console.log(this.libros);
                    console.log("CANTIDAD DE PAGINAS MODIFICADO");
                    break;
                default:
                    console.log("No se encuentra informacion.")
            }
        }
    }
}

let gestionarLibros = new GestorLibros('librosreg.txt');
console.log("-------------------");

menu();

function menu() {

    let elegirMenu: number = readlineSync.questionInt("\nIngrese..\n[1]PARA INSERTAR NUEVO LIBRO o CARGAR REGISTRO\n[2]PARA CONSULTAR AUTOR\n[3]PARA MODIFICAR INFORMACION\n[4]PARA ELIMINAR UN REGISTRO\n[5]PARA MOSTRAR LA LIBERIA\n[0]PARA SALIR\nNum: ");

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
