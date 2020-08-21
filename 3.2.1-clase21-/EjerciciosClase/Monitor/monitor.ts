class Monitor {
    private estaConectado: boolean;
    private estaPrendido: boolean;
    private brilloActual: number;


    constructor(ajustarBrillo: number) {
        this.estaConectado = false;
        this.estaPrendido = false;
        this.brilloActual = ajustarBrillo;
    }

    conectarDesconectar(): void {
        if (this.estaConectado) {
            this.estaConectado = false;
        } else {
            this.estaConectado = true;
        }
    }

    prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }

    }

    subirBrillo(): void {
        this.brilloActual = this.brilloActual + 50;
    }

    bajarBrillo(): void {
        this.brilloActual = this.brilloActual - 1;
    }

    elegirBrillo(ajustarBrillo: number): void {
        this.brilloActual = ajustarBrillo;
    }

}

let ajustarBrillo: number = 0;
let miMonitor = new Monitor(ajustarBrillo);
console.log(miMonitor);

miMonitor.conectarDesconectar();
miMonitor.prenderApagar();
miMonitor.subirBrillo();
console.log(miMonitor);

miMonitor.bajarBrillo();
console.log(miMonitor);

miMonitor.elegirBrillo(60);
console.log(miMonitor);





