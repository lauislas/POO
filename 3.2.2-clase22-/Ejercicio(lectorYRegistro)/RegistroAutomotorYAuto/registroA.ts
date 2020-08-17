//aplicando composicion de clases,encapsulamiento y clase lector de archivos. 

import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

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

class Auto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private titular: string;

    public constructor(marca: string, modelo: string, anio: number, patente: string, titular: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
    }

    public getTitular(): string {
        return this.titular;
    }
    public setTitular(nuevoTitular: string): string {
        return this.titular = nuevoTitular;
    }
    public getPatente(): string {
        return this.patente;
    }
    public setPatente(nuevaPatente: string): string {
        return this.patente = nuevaPatente;
    }
}

class RegistroAutomotor {
    private listaAutos: Auto[];
    private lectorArchivos: LectorArchivo;

    constructor(archivo: string, listaAutos?: Auto[]) {
        this.lectorArchivos = new LectorArchivo(archivo);
        if (listaAutos == undefined || listaAutos == null) {
            this.listaAutos = new Array();
        }
        else {
            this.listaAutos = listaAutos;
        }
    }


    public cargarRegistro(): Auto[] {
        let autos: string[] = this.lectorArchivos.leerArchivo();
        for (let i: number = 0; i < autos.length; i++) {
            let datosAuto: string[] = autos[i].split(",");
            let auto: Auto = new Auto(datosAuto[0], datosAuto[1], Number(datosAuto[2]),datosAuto[3],datosAuto[4]);
            this.listaAutos.push(auto);
        }
        return this.listaAutos;
    }

    public darAltaAuto(): void {
        let marca: string = readlineSync.question("Ingrese la marca: ");
        let modelo: string = readlineSync.question("Ingrese el modelo: ");
        let anio: number = readlineSync.questionInt("Ingrese el anio: ");
        let patente: string = readlineSync.question("Ingrese la patente:");
        let titular: string = readlineSync.question("Ingrese titular:");
        let auto: Auto = new Auto(marca, modelo, anio, patente, titular);
        this.listaAutos.push(auto);
        console.log(this.listaAutos);
        console.log("REGISTRO NUEVO DADO DE ALTA.");
    }

    public buscarTitular(busqueda: string): number {

        for (let i: number = 0; i < this.listaAutos.length; i++) {
            if (busqueda == this.listaAutos[i].getTitular()) {
                return i;
            }
        }
        return -1;
    }

    public encontrarTitular(): void {
        let encontrar: string = readlineSync.question("Indique titular a buscar: ");
        let i: number = this.buscarTitular(encontrar);
        if (i != -1) {
            console.log("El titular", encontrar, "se encuentra en la posición", i, "del registro.");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public borrarRegistro(): void {
        let borrar: string = readlineSync.question("Ingrese el titular para borrar: ");
        let i: number = this.buscarTitular(borrar);
        if (i != -1) {
            this.listaAutos.splice(this.buscarTitular(borrar), 1);
            console.log(this.listaAutos);
            console.log("REGISTRO BORRADO");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public actualizarRegistro(): void {
        console.log("ACTUALIZANDO REGISTRO...")
        let elegir: number = readlineSync.questionInt("Ingrese 1 para modificar titular, 2 para modificar patente: ");
        let modificar: string = readlineSync.question("Ingrese el titular: ");
        let i: number = this.buscarTitular(modificar);
        if (i != -1) {
            switch (elegir) {
                case 1:
                    let nuevoT: string = readlineSync.question("Ingrese nuevo titular: ");
                    this.listaAutos[i].setTitular(nuevoT);
                    console.log(this.listaAutos);
                    console.log("TITULAR ACTUALIZADO");
                    break;

                case 2:
                    let nuevaP: string = readlineSync.question("Ingrese nueva patente: ");
                    this.listaAutos[i].setPatente(nuevaP);
                    console.log(this.listaAutos);
                    console.log("PATENTE ACTUALIZADA");
                    break;
                default:
                    console.log("Ingrese opcion valida.");
                    break;
            }
        } else {
            console.log("No se registra titular.");
        }
    }
}

let miRegistroAutomotor = new RegistroAutomotor('./registroA.txt');

function menu() {
    let elegirMenu: number = readlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");

    while (elegirMenu != 0) {

        switch (elegirMenu) {
            case 1:
                console.log(miRegistroAutomotor.cargarRegistro());
                break;
            case 2:
                miRegistroAutomotor.darAltaAuto();
                break;
            case 3:
                miRegistroAutomotor.encontrarTitular();
                break;
            case 4:
                miRegistroAutomotor.actualizarRegistro();

                break;
            case 5:
                miRegistroAutomotor.borrarRegistro();
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
        elegirMenu = readlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    }
}
menu();








