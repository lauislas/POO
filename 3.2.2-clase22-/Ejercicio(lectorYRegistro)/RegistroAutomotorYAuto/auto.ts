class Rueda {
    private anchoNeumatico: number;
    private marca: string;

    public constructor(anchoNeumatico: number, marca: string) {
        this.anchoNeumatico = anchoNeumatico;
        this.marca = marca;
    }
}

class Motor {
    private tipoMotor: string;
    private tipocajaCambio: string;

    public constructor(tipoMotor: string, tipocajaCambio: string) {
        this.tipoMotor = tipoMotor;
        this.tipocajaCambio = tipocajaCambio;
    }
}

class Auto {

    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private titular: string;
    private rueda: Rueda[];
    private motor: Motor;

    public constructor(marca: string, modelo: string, anio: number, patente: string, titular: string, rueda: Rueda[], motor: Motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
        this.rueda = rueda;
        this.motor = motor;
    }
}
    

let ruedas: Rueda[] = [
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear')
]

let interior: Motor = new Motor('Boxer', 'manual');
let miAuto: Auto = new Auto('Fiat', 'Palio', 2004, 'Txt123', 'Laura', ruedas, interior);
console.log(miAuto);
