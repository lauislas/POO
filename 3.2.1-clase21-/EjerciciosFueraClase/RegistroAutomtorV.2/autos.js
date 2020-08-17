"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
    }
    Auto.prototype.getTitular = function () {
        return this.titular;
    };
    Auto.prototype.setTitular = function (nuevoTitular) {
        return this.titular = nuevoTitular;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (nuevaPatente) {
        return this.patente = nuevaPatente;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaAutos) {
        if (listaAutos == undefined || listaAutos == null) {
            this.listaAutos = new Array();
        }
        else {
            this.listaAutos = listaAutos;
        }
    }
    RegistroAutomotor.prototype.cargarRegistro = function () {
        var archivoTxt = fs.readFileSync('autos.txt', 'utf8');
        var registro = archivoTxt.split('\r\n');
        for (var i = 0; i < registro.length; i++) {
            var datoAutos = registro[i].split(',');
            var auto = new Auto(datoAutos[0], datoAutos[1], Number(datoAutos[2]), datoAutos[3], datoAutos[4]);
            this.listaAutos.push(auto);
            console.log(auto);
        }
    };
    RegistroAutomotor.prototype.darAltaAuto = function (marca, modelo, anio, patente, titular) {
        var auto = new Auto(marca, modelo, anio, patente, titular);
        this.listaAutos.push(auto);
        return auto;
    };
    RegistroAutomotor.prototype.buscarTitular = function (busqueda) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (busqueda == this.listaAutos[i].getTitular()) {
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.encontrarTitular = function (busqueda) {
        var i = this.buscarTitular(busqueda);
        if (i != -1) {
            console.log("El titular", busqueda, "se encuentra en la posición", i, "del registro.");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.borrarRegistro = function (busqueda) {
        var i = this.buscarTitular(busqueda);
        if (i != -1) {
            this.listaAutos.splice(this.buscarTitular(busqueda), 1);
            console.log(this.listaAutos);
            console.log("REGISTRO BORRADO");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.actualizarTitular = function (busqueda) {
        console.log("ACTUALIZANDO REGISTRO...");
        var i = this.buscarTitular(busqueda);
        if (i != -1) {
            var nuevoT = ReadlineSync.question("Ingrese nuevo titular: ");
            this.listaAutos[i].setTitular(nuevoT);
            console.log(this.listaAutos);
            console.log("TITULAR ACTUALIZADO");
        }
    };
    return RegistroAutomotor;
}());
var miRegistro = new RegistroAutomotor();
miRegistro.cargarRegistro();
miRegistro.darAltaAuto('Fiat', '600', 1990, 'UUU123', 'Luciana');
miRegistro.encontrarTitular('Antonia');
miRegistro.encontrarTitular('Paula'); // ejemplo si no encuentra
miRegistro.borrarRegistro('Lucia');
miRegistro.borrarRegistro('Martin'); // ejemplo si no encuentra
miRegistro.actualizarTitular('Diego');
