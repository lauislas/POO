var Auto = /** @class */ (function () {
    function Auto() {
        this.estaEncendido = false;
        this.Velocidad = 0;
        this.estaMoviendose = false;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.Velocidad = this.Velocidad + 10;
    };
    Auto.prototype.desacelerar = function () {
        this.Velocidad = this.Velocidad - 10;
    };
    Auto.prototype.andarOfrenar = function () {
        if (this.estaMoviendose) {
            this.estaMoviendose = false;
        }
        else {
            this.estaMoviendose = true;
        }
    };
    Auto.prototype.elegirVelocidad = function (velocidadElegida) {
        this.Velocidad = velocidadElegida;
    };
    return Auto;
}());
var velocidadElegida = 50;
var miAuto = new Auto();
console.log(miAuto);
miAuto.encenderApagar();
miAuto.acelerar();
miAuto.andarOfrenar();
console.log(miAuto);
miAuto.elegirVelocidad(50);
console.log(miAuto);
miAuto.desacelerar();
console.log(miAuto);
