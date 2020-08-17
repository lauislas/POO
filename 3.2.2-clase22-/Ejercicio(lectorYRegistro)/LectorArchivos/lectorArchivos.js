"use strict";
exports.__esModule = true;
var fs = require("fs");
var LectorArchivo = /** @class */ (function () {
    function LectorArchivo(archivoTxt) {
        this.archivoTxt = archivoTxt;
    }
    LectorArchivo.prototype.leerArchivo = function () {
        var archivo = fs.readFileSync(this.archivoTxt, 'utf8');
        var separar = archivo.split('\r\n');
        return separar;
    };
    return LectorArchivo;
}());
var lector = new LectorArchivo('./texto.txt');
console.log(lector.leerArchivo());
