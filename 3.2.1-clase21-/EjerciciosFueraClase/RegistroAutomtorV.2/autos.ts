import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

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

    public darAltaAuto(marca: string, modelo: string, anio: number, patente: string, titular: string): Auto {
        let auto: Auto = new Auto(marca, modelo, anio, patente, titular);
        this.listaAutos.push(auto);
        return auto;
    }

    public buscarTitular(busqueda: string): number {

        for (let i: number = 0; i < this.listaAutos.length; i++) {
            if (busqueda == this.listaAutos[i].getTitular()) {
                return i;
            }
        }
        return -1;
    }

    public encontrarTitular(busqueda: string): void {
        let i: number = this.buscarTitular(busqueda);
        if (i != -1) {
            console.log("El titular", busqueda, "se encuentra en la posición", i, "del registro.");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public borrarRegistro(busqueda: string): void {
        let i: number = this.buscarTitular(busqueda);
        if (i != -1) {
            this.listaAutos.splice(this.buscarTitular(busqueda), 1);
            console.log(this.listaAutos);
            console.log("REGISTRO BORRADO");
        } else {
            console.log("El titular no se encuentra.");
        }
    }

    public actualizarTitular(busqueda: string): void {
        console.log("ACTUALIZANDO REGISTRO...")
        let i: number = this.buscarTitular(busqueda);
        if (i != -1) {
            let nuevoT: string = ReadlineSync.question("Ingrese nuevo titular: ");
            this.listaAutos[i].setTitular(nuevoT);
            console.log(this.listaAutos);
            console.log("TITULAR ACTUALIZADO");
        }
    }

}

let miRegistro = new RegistroAutomotor();

miRegistro.cargarRegistro();
miRegistro.darAltaAuto('Fiat', '600', 1990, 'UUU123', 'Luciana');
miRegistro.encontrarTitular('Antonia');
miRegistro.encontrarTitular('Paula');// ejemplo si no encuentra
miRegistro.borrarRegistro('Lucia')
miRegistro.borrarRegistro('Martin'); // ejemplo si no encuentra
miRegistro.actualizarTitular('Diego');




