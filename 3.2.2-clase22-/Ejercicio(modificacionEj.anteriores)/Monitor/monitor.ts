class Monitor {
    private estaConectado: boolean;
    private estaPrendido: boolean;
    private brilloActual: number;


    public constructor(ajustarBrillo: number) {
        this.estaConectado = false;
        this.estaPrendido = false;
        this.brilloActual = ajustarBrillo;
    }

    public conectarDesconectar(): void {
        if (this.estaConectado) {
            this.estaConectado = false;
        } else {
            this.estaConectado = true;
        }
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }

    }

    public subirBrillo(): void {
        this.brilloActual = this.brilloActual + 50;
    }

    public bajarBrillo(): void {
        this.brilloActual = this.brilloActual - 1;
    }

    public elegirBrillo(ajustarBrillo: number): void {
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





