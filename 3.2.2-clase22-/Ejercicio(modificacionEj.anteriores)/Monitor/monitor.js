var Monitor = /** @class */ (function () {
    function Monitor(ajustarBrillo) {
        this.estaConectado = false;
        this.estaPrendido = false;
        this.brilloActual = ajustarBrillo;
    }
    Monitor.prototype.conectarDesconectar = function () {
        if (this.estaConectado) {
            this.estaConectado = false;
        }
        else {
            this.estaConectado = true;
        }
    };
    Monitor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Monitor.prototype.subirBrillo = function () {
        this.brilloActual = this.brilloActual + 50;
    };
    Monitor.prototype.bajarBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.elegirBrillo = function (ajustarBrillo) {
        this.brilloActual = ajustarBrillo;
    };
    return Monitor;
}());
var ajustarBrillo = 0;
var miMonitor = new Monitor(ajustarBrillo);
console.log(miMonitor);
miMonitor.conectarDesconectar();
miMonitor.prenderApagar();
miMonitor.subirBrillo();
console.log(miMonitor);
miMonitor.bajarBrillo();
console.log(miMonitor);
miMonitor.elegirBrillo(60);
console.log(miMonitor);
