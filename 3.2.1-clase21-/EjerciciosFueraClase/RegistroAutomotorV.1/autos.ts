import * as fs from 'fs';
import * as ReadlineSync from './node_modules/readline-sync'

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

    public constructor(listaAutos?: Auto[]) {
        if (listaAutos== undefined || listaAutos == null) {

            this.listaAutos = new Array();
        }
        else {
            this.listaAutos = listaAutos;
        }
    }
        

    public cargarRegistro(): void {

        let archivoTxt: string = fs.readFileSync('autos.txt', 'utf8');
        let registro: string[] = archivoTxt.split('\r\n');

        for (let i: number = 0; i < registro.length; i++) {
            let datoAutos: string[] = registro[i].split(',');

            let auto = new Auto(datoAutos[0], datoAutos[1], Number(datoAutos[2]), datoAutos[3], datoAutos[4]);
            this.listaAutos.push(auto);
            console.log(auto);
        }
    }

    public darAltaAuto(): void {
        let marca: string = ReadlineSync.question("Ingrese la marca: ");
        let modelo: string = ReadlineSync.question("Ingrese el modelo: ");
        let anio: number = ReadlineSync.questionInt("Ingrese el anio: ");
        let patente: string = ReadlineSync.question("Ingrese la patente:");
        let titular: string = ReadlineSync.question("Ingrese titular:");
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
        let encontrar: string = ReadlineSync.question("Indique titular a buscar: ");
        let i: number = this.buscarTitular(encontrar);
        if (i != -1) {
            console.log("El titular", encontrar, "se encuentra en la posición", i, "del registro.");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public borrarRegistro(): void {
        let borrar: string = ReadlineSync.question("Ingrese el titular para borrar: ");
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
        let elegir: number = ReadlineSync.questionInt("Ingrese 1 para modificar titular, 2 para modificar patente: ");
        let modificar: string = ReadlineSync.question("Ingrese el titular: ");
        let i: number = this.buscarTitular(modificar);
        if (i != -1) {
            switch (elegir) {
                case 1:
                    let nuevoT: string = ReadlineSync.question("Ingrese nuevo titular: ");
                    this.listaAutos[i].setTitular(nuevoT);
                    console.log(this.listaAutos);
                    console.log("TITULAR ACTUALIZADO");
                    break;

                case 2:
                    let nuevaP: string = ReadlineSync.question("Ingrese nueva patente: ");
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

let miRegistro = new RegistroAutomotor();

function menu() {
    let elegirMenu: number = ReadlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");

    while (elegirMenu != 0) {

        switch (elegirMenu) {
            case 1:
                miRegistro.cargarRegistro();
                break;
            case 2:
                miRegistro.darAltaAuto();
                break;
            case 3:
                miRegistro.encontrarTitular();
                break;
            case 4:
                miRegistro.actualizarRegistro();

                break;
            case 5:
                miRegistro.borrarRegistro();
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
        elegirMenu = ReadlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    }
}
menu();



