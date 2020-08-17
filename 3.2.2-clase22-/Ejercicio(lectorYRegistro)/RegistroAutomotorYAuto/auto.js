var Rueda = /** @class */ (function () {
    function Rueda(anchoNeumatico, marca) {
        this.anchoNeumatico = anchoNeumatico;
        this.marca = marca;
    }
    return Rueda;
}());
var Motor = /** @class */ (function () {
    function Motor(tipoMotor, tipocajaCambio) {
        this.tipoMotor = tipoMotor;
        this.tipocajaCambio = tipocajaCambio;
    }
    return Motor;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, patente, titular, rueda, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
        this.rueda = rueda;
        this.motor = motor;
    }
    return Auto;
}());
var ruedas = [
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear'),
    new Rueda(205, 'Goodyear')
];
var interior = new Motor('Boxer', 'manual');
var miAuto = new Auto('Fiat', 'Palio', 2004, 'Txt123', 'Laura', ruedas, interior);
console.log(miAuto);
