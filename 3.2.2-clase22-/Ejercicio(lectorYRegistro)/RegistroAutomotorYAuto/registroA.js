"use strict";
//aplicando composicion de clases,encapsulamiento y clase lector de archivos. 
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
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
    function RegistroAutomotor(archivo, listaAutos) {
        this.lectorArchivos = new LectorArchivo(archivo);
        if (listaAutos == undefined || listaAutos == null) {
            this.listaAutos = new Array();
        }
        else {
            this.listaAutos = listaAutos;
        }
    }
    RegistroAutomotor.prototype.cargarRegistro = function () {
        var autos = this.lectorArchivos.leerArchivo();
        for (var i = 0; i < autos.length; i++) {
            var datosAuto = autos[i].split(",");
            var auto = new Auto(datosAuto[0], datosAuto[1], Number(datosAuto[2]), datosAuto[3], datosAuto[4]);
            this.listaAutos.push(auto);
        }
        return this.listaAutos;
    };
    RegistroAutomotor.prototype.darAltaAuto = function () {
        var marca = readlineSync.question("Ingrese la marca: ");
        var modelo = readlineSync.question("Ingrese el modelo: ");
        var anio = readlineSync.questionInt("Ingrese el anio: ");
        var patente = readlineSync.question("Ingrese la patente:");
        var titular = readlineSync.question("Ingrese titular:");
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
        var encontrar = readlineSync.question("Indique titular a buscar: ");
        var i = this.buscarTitular(encontrar);
        if (i != -1) {
            console.log("El titular", encontrar, "se encuentra en la posición", i, "del registro.");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.borrarRegistro = function () {
        var borrar = readlineSync.question("Ingrese el titular para borrar: ");
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
        var elegir = readlineSync.questionInt("Ingrese 1 para modificar titular, 2 para modificar patente: ");
        var modificar = readlineSync.question("Ingrese el titular: ");
        var i = this.buscarTitular(modificar);
        if (i != -1) {
            switch (elegir) {
                case 1:
                    var nuevoT = readlineSync.question("Ingrese nuevo titular: ");
                    this.listaAutos[i].setTitular(nuevoT);
                    console.log(this.listaAutos);
                    console.log("TITULAR ACTUALIZADO");
                    break;
                case 2:
                    var nuevaP = readlineSync.question("Ingrese nueva patente: ");
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
var miRegistroAutomotor = new RegistroAutomotor('./registroA.txt');
function menu() {
    var elegirMenu = readlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    while (elegirMenu != 0) {
        switch (elegirMenu) {
            case 1:
                console.log(miRegistroAutomotor.cargarRegistro());
                break;
            case 2:
                miRegistroAutomotor.darAltaAuto();
                break;
            case 3:
                miRegistroAutomotor.encontrarTitular();
                break;
            case 4:
                miRegistroAutomotor.actualizarRegistro();
                break;
            case 5:
                miRegistroAutomotor.borrarRegistro();
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
        elegirMenu = readlineSync.questionInt("\nIngrese..\n[1]Para cargar registro.\n[2]Para dar de alta nuevo registro.\n[3]Para buscar un registro.\n[4]Para actualizar un registro.\n[5]Para eliminar un registro\n[0]Para salir.\nNum: ");
    }
}
menu();
