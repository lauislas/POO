import * as ReadlineSync from './node_modules/readline-sync';

class Decodificador {
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    public constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }

    public prenderApagar(): void {
        if (this.estaPrendido = !this.estaPrendido) {
        }
    }

    public subirVolumen(): void {
        if (this.estaPrendido) {
            this.volumenActual = this.volumenActual + 1;
        }
    }
    public bajarVolumen(): void {
        if (this.estaPrendido) {
            this.volumenActual = this.volumenActual - 1;
        }
    }
    public subirCanal(): void {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual + 1;
        }
    }
    public bajarCanal(): void {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual - 1;
        }
    }
    public elegirCanal(canal: number): void {
        if (this.estaPrendido) {
            this.canalActual = canal;
        }
    }
    public verCanalActual(): number {
        return this.canalActual;
    }
}


class Televisor { //clase compuesta por la clase decodificador
    private estaPrendido: boolean;
    private decodificador: Decodificador;

    public constructor(decodificador: Decodificador) {
        this.decodificador = decodificador;

    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
            decodificador.prenderApagar();
        }

    }
    public subirVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    }
    public bajarVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    }
    public subirCanal(): void {
        if (this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    }
    public bajarCanal(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    }
    public elegirCanal(canal: number): void {
        if (this.estaPrendido) {
            this.decodificador.elegirCanal(canal);
        }

    }
    public verCanalActual(): number {
        return this.decodificador.verCanalActual();
    }
}


let decodificador: Decodificador = new Decodificador(15, 8);
let miTv: Televisor = new Televisor(decodificador);

miTv.prenderApagar();
miTv.subirVolumen();
console.log(miTv);
let canal: number = ReadlineSync.questionInt("ingrese canal: ");
miTv.bajarVolumen();
miTv.elegirCanal(canal);
console.log(miTv); 

