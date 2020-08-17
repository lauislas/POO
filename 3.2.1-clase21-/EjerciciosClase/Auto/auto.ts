class Auto {
    private estaEncendido: boolean;
    private velocidad: number;
    private estaMoviendose: boolean;
    
    constructor() {
        this.estaEncendido = false;
        this.velocidad = 0;
        this.estaMoviendose= false;
    }

    encenderApagar(): void {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        } else {
            this.estaEncendido = true;
        }
    }
    acelerar(): void {
        this.velocidad = this.velocidad + 10;
    }
    desacelerar(): void {
        this.velocidad = this.velocidad - 10;
    }

    andarOfrenar(): void {
        if (this.estaMoviendose) {
            this.estaMoviendose = false;
        } else {
            this.estaMoviendose = true;
        }
    }
    elegirVelocidad(velocidadElegida: number): void {
        this.velocidad = velocidadElegida;
    }       
}

let velocidadElegida: number = 50;
let miAuto = new Auto();
console.log(miAuto);

miAuto.encenderApagar();
miAuto.acelerar();
miAuto.andarOfrenar();
console.log(miAuto);

miAuto.elegirVelocidad(50);
console.log(miAuto);

miAuto.desacelerar();
console.log(miAuto);