"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var Decodificador = /** @class */ (function () {
    function Decodificador(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    Decodificador.prototype.prenderApagar = function () {
        if (this.estaPrendido = !this.estaPrendido) {
        }
    };
    Decodificador.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            this.volumenActual = this.volumenActual + 1;
        }
    };
    Decodificador.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            this.volumenActual = this.volumenActual - 1;
        }
    };
    Decodificador.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual + 1;
        }
    };
    Decodificador.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual - 1;
        }
    };
    Decodificador.prototype.elegirCanal = function (canal) {
        if (this.estaPrendido) {
            this.canalActual = canal;
        }
    };
    Decodificador.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor(decodificador) {
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
            decodificador.prenderApagar();
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    };
    Televisor.prototype.elegirCanal = function (canal) {
        if (this.estaPrendido) {
            this.decodificador.elegirCanal(canal);
        }
    };
    Televisor.prototype.verCanalActual = function () {
        return this.decodificador.verCanalActual();
    };
    return Televisor;
}());
var decodificador = new Decodificador(15, 8);
var miTv = new Televisor(decodificador);
miTv.prenderApagar();
miTv.subirVolumen();
console.log(miTv);
var canal = ReadlineSync.questionInt("ingrese canal: ");
miTv.bajarVolumen();
miTv.elegirCanal(canal);
console.log(miTv);
