/*usando herencia y agregandole variables y funciones */

import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

class Vehiculos { //clase padre

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
class Auto extends Vehiculos { //clase hija de vehiculo
    private cantidadPuertas: number; //agregando variable
    public constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, cantidadPuertas: number) {
        super(marca, modelo, anio, patente, titular);
        this.cantidadPuertas = cantidadPuertas;
    }
    public getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }
}

class Moto extends Vehiculos {
    private cilindrada: number;//agregando variable
    public constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, cilindrada: number) {
        super(marca, modelo, anio, patente, titular);
        this.cilindrada = cilindrada;

    }
    public getCilindrada(): number {
        return this.cilindrada;
    }

}

class Camion extends Vehiculos {
    private tara: number;
    private cantidadRuedas: number;

    public constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, tara: number, cantidadRuedas: number) {
        super(marca, modelo, anio, patente, titular);
        this.tara = tara;
        this.cantidadRuedas = cantidadRuedas;
    }
    public getTara(): number {
        return this.tara;
    }

    public getCantidadRuedas(): number {
        return this.cantidadRuedas;
    }
}

class RegistroAutomotor {
    private listaVehiculos: Vehiculos[];

    public constructor(listaVehiculos?: Vehiculos[]) {
        if (listaVehiculos == undefined || listaVehiculos == null) {
            this.listaVehiculos = new Array();
        }
        else {
            this.listaVehiculos = listaVehiculos;
        }
    }

    public cargarRegistro(): Vehiculos[] {
        let archivoTxt: string = fs.readFileSync('./vehiculos.txt', 'utf8');
        let registro: string[] = archivoTxt.split('\r\n');
        let vehiculo: Vehiculos;

        for (let i: number = 0; i < registro.length; i++) {
            let datoVehiculos: string[] = registro[i].split(',');

            switch (datoVehiculos[0]) {
                case "Auto":
                    vehiculo = new Auto(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]));
                    break;
                case "Camion":
                    vehiculo = new Camion(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]), Number(datoVehiculos[7]));
                    break;
                case "Moto":
                    vehiculo = new Moto(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]));
                    break;
                default:
                    break;
            }
            this.listaVehiculos[i] = vehiculo;
        }
        return this.listaVehiculos;
    }

    public buscarTitular(busqueda: string): number {

        for (let i: number = 0; i < this.listaVehiculos.length; i++) {
            if (busqueda == this.listaVehiculos[i].getTitular()) {
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
            this.listaVehiculos.splice(this.buscarTitular(borrar), 1);
            console.log(this.listaVehiculos);
            console.log("REGISTRO BORRADO");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public darAlta(): Vehiculos[] {
        console.log("Para dar de alta ingrese..")
        let elegir: number = ReadlineSync.questionInt("1 para auto, 2 para camion, 3 para moto:");
        let marca: string = ReadlineSync.question("Ingrese la marca: ");
        let modelo: string = ReadlineSync.question("Ingrese el modelo: ");
        let anio: number = ReadlineSync.questionInt("Ingrese el anio: ");
        let patente: string = ReadlineSync.question("Ingrese la patente:");
        let titular: string = ReadlineSync.question("Ingrese titular:");
        let vehiculo: Vehiculos;
        switch (elegir) {
            case 1:
                let cantidadPuertas: number = ReadlineSync.questionInt("Ingrese cantidad puertas:");
                vehiculo = new Auto(marca, modelo, anio, patente, titular, cantidadPuertas);
                this.listaVehiculos.push(vehiculo);
                break;
            case 2:
                let tara: number = ReadlineSync.questionInt("Ingrese tara: ");
                let cantidadRuedas: number = ReadlineSync.questionInt("Ingrese cantidad de ruedas: ");
                vehiculo = new Camion(marca, modelo, anio, patente, titular, tara, cantidadRuedas);
                this.listaVehiculos.push(vehiculo);
                break;
            case 3:
                let cilindrada: number = ReadlineSync.questionInt("Ingrese cilindrada: ");
                vehiculo = new Moto(marca, modelo, anio, patente, titular, cilindrada);
                this.listaVehiculos.push(vehiculo);
                break;
            default:
                console.log("ingrese una opcion valida.")
                break;
        }
        return this.listaVehiculos;
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
                    this.listaVehiculos[i].setTitular(nuevoT);
                    console.log(this.listaVehiculos);
                    console.log("TITULAR ACTUALIZADO");
                    break;
                case 2:
                    let nuevaP: string = ReadlineSync.question("Ingrese nueva patente: ");
                    this.listaVehiculos[i].setPatente(nuevaP);
                    console.log(this.listaVehiculos);
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
                console.log(miRegistro.cargarRegistro());
                break;
            case 2:
                console.log(miRegistro.darAlta());
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