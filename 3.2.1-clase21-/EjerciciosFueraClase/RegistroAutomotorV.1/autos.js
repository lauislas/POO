"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("./node_modules/readline-sync");
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
    RegistroAutomotor.prototype.darAltaAuto = function () {
        var marca = ReadlineSync.question("Ingrese la marca: ");
        var modelo = ReadlineSync.question("Ingrese el modelo: ");
        var anio = ReadlineSync.questionInt("Ingrese el anio: ");
        var patente = ReadlineSync.question("Ingrese la patente:");
        var titular = ReadlineSync.question("Ingrese titular:");
        var auto = new Auto(marca, modelo, anio, patente, titular);
        this.listaAutos.push(auto);
        console.log(this.listaAutos);
        console.log("REGISTRO NUEVO DADO DE ALTA.");
    };
    RegistroAutomotor.prototype.buscarTitular = function (busqueda) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (busqueda == this.listaAutos[i].getTitular()) {
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.encontrarTitular = function () {
        var encontrar = ReadlineSync.question("Indique titular a buscar: ");
        var i = this.buscarTitular(encontrar);
        if (i != -1) {
            console.log("El titular", encontrar, "se encuentra en la posición", i, "del registro.");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.borrarRegistro = function () {
        var borrar = ReadlineSync.question("Ingrese el titular para borrar: ");
        var i = this.buscarTitular(borrar);
        if (i != -1) {
            this.listaAutos.splice(this.buscarTitular(borrar), 1);
            console.log(this.listaAutos);
            console.log("REGISTRO BORRADO");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.actualizarRegistro = function () {
        console.log("ACTUALIZANDO REGISTRO...");
        var elegir = ReadlineSync.questionInt("Ingrese 1 para modificar titular, 2 para modificar patente: ");
        var modificar = ReadlineSync.question("Ingrese el titular: ");
        var i = this.buscarTitular(modificar);
        if (i != -1) {
            switch (elegir) {
                case 1:
                    var nuevoT = ReadlineSync.question("Ingrese nuevo titular: ");
                    this.listaAutos[i].setTitular(nuevoT);
                    console.log(this.listaAutos);
                    console.log("TITULAR ACTUALIZADO");
                    break;
                case 2:
                    var nuevaP = ReadlineSync.question("Ingrese nueva patente: ");
                    this.listaAutos[i].setPatente(nuevaP);
                    console.log(this.listaAutos);
                    console.log("PATENTE ACTUALIZADA");
                    break;
                default:
                    console.log("Ingrese opcion valida.");
                    break;
            }
        }
        else {
            console.log("No se registra titular.");
        }
    };
    return RegistroAutomotor;
}());
var miRegistro = new RegistroAutomotor();
function menu() {
    var elegirMenu = ReadlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    while (elegirMenu != 0) {
        switch (elegirMenu) {
            case 1:
                miRegistro.cargarRegistro();
                break;
            case 2:
                miRegistro.darAltaAuto();
                break;
            case 3:
                miRegistro.encontrarTitular();
                break;
            case 4:
                miRegistro.actualizarRegistro();
                break;
            case 5:
                miRegistro.borrarRegistro();
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
        elegirMenu = ReadlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    }
}
menu();
