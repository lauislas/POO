var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio) {
        this.velocidadActual = 40;
        this.anio = 2020;
        this.marca = marca;
        this.modelo = modelo;
        if (anio) {
            this.anio = anio;
        }
        else {
            this.anio = this.anio;
        }
    }
    Auto.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    return Auto;
}());
var primerAuto = new Auto("ford", "Fiesta", 1999);
var segundoAuto = new Auto("Renault", "Clio");
var tercerAuto = new Auto("Peugeot", "307");
console.log(primerAuto);
console.log("La marca del auto es:", primerAuto.getMarca());
console.log("----------------");
console.log(segundoAuto);
console.log("La marca del auto es:", segundoAuto.getMarca());
console.log(tercerAuto);
console.log("----------------");
var arregloAutos = [primerAuto, segundoAuto, tercerAuto];
console.log(arregloAutos);
