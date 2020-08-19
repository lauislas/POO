//Implementar las clases y métodos que se muestran 
// Agregar variables/métodos adicionales
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 20;
        this.volumenActual = 40;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("Enviando mensaje...");
    };
    Telefono.prototype.hacerLlamada = function (num) {
        return 'llamando al...' + num;
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido = !this.estaPrendido) {
        }
    };
    Telefono.prototype.mostrarBateria = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.cargarBateria = function () {
        this.bateriaActual += 10;
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log("sacando foto...");
    };
    TelefonoConCamara.prototype.grabarVideo = function () {
        console.log("Grabando video...");
    };
    TelefonoConCamara.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    TelefonoConCamara.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 10;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.SubirFrecuencia = function () {
        this.frecuenciaActual += 10;
    };
    TelefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual -= 10;
    };
    return TelefonoConRadio;
}(Telefono));
var miTelefonoCamara = new TelefonoConCamara();
miTelefonoCamara.prenderApagar();
miTelefonoCamara.mandarMensaje();
console.log(miTelefonoCamara.hacerLlamada(2469949));
miTelefonoCamara.sacarFoto();
miTelefonoCamara.grabarVideo();
console.log(miTelefonoCamara);
miTelefonoCamara.subirVolumen();
miTelefonoCamara.mostrarBateria();
console.log(miTelefonoCamara);
console.log("---------------");
var miTelefonoRadio = new TelefonoConRadio();
miTelefonoRadio.prenderApagar();
miTelefonoRadio.verFrecuenciaActual();
miTelefonoRadio.mostrarBateria();
console.log(miTelefonoRadio);
miTelefonoRadio.cargarBateria();
miTelefonoRadio.SubirFrecuencia();
console.log(miTelefonoRadio);
