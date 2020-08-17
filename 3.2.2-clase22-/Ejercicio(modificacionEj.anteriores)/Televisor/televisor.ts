class Televisor {
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    public constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }


    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
    public subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1;
    }
    public bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1;
    }
    public subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }
    public bajarCanal(): void {
        this.canalActual = this.canalActual - 1;
    }
    public elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
}

let volumenInicial: number = 10;
let canalInicial: number = 24;

let miTelevisor = new Televisor(volumenInicial, canalInicial);
console.log(miTelevisor);

miTelevisor.prenderApagar()
miTelevisor.elegirCanal(9);
miTelevisor.subirVolumen();
console.log(miTelevisor);