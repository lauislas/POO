"use strict";
/*usando herencia y agregandole variables y funciones */
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
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Vehiculos = /** @class */ (function () {
    function Vehiculos(marca, modelo, anio, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.titular = titular;
    }
    Vehiculos.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculos.prototype.setTitular = function (nuevoTitular) {
        return this.titular = nuevoTitular;
    };
    Vehiculos.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculos.prototype.setPatente = function (nuevaPatente) {
        return this.patente = nuevaPatente;
    };
    return Vehiculos;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, anio, patente, titular, cantidadPuertas) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.cantidadPuertas = cantidadPuertas;
        return _this;
    }
    Auto.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    return Auto;
}(Vehiculos));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, anio, patente, titular, cilindrada) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(Vehiculos));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, anio, patente, titular, tara, cantidadRuedas) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.tara = tara;
        _this.cantidadRuedas = cantidadRuedas;
        return _this;
    }
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    Camion.prototype.getCantidadRuedas = function () {
        return this.cantidadRuedas;
    };
    return Camion;
}(Vehiculos));
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaVehiculos) {
        if (listaVehiculos == undefined || listaVehiculos == null) {
            this.listaVehiculos = new Array();
        }
        else {
            this.listaVehiculos = listaVehiculos;
        }
    }
    RegistroAutomotor.prototype.cargarRegistro = function () {
        var archivoTxt = fs.readFileSync('./vehiculos.txt', 'utf8');
        var registro = archivoTxt.split('\r\n');
        var vehiculo;
        for (var i = 0; i < registro.length; i++) {
            var datoVehiculos = registro[i].split(',');
            switch (datoVehiculos[0]) {
                case "Auto":
                    vehiculo = new Auto(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]));
                    break;
                case "Camion":
                    vehiculo = new Camion(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]), Number(datoVehiculos[7]));
                    break;
                case "Moto":
                    vehiculo = new Moto(datoVehiculos[1], datoVehiculos[2], Number(datoVehiculos[3]), datoVehiculos[4], datoVehiculos[5], Number(datoVehiculos[6]));
                    break;
                default:
                    break;
            }
            this.listaVehiculos[i] = vehiculo;
        }
        return this.listaVehiculos;
    };
    RegistroAutomotor.prototype.buscarTitular = function (busqueda) {
        for (var i = 0; i < this.listaVehiculos.length; i++) {
            if (busqueda == this.listaVehiculos[i].getTitular()) {
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
            this.listaVehiculos.splice(this.buscarTitular(borrar), 1);
            console.log(this.listaVehiculos);
            console.log("REGISTRO BORRADO");
        }
        else {
            console.log("El titular no se encuentra.");
        }
    };
    RegistroAutomotor.prototype.darAlta = function () {
        console.log("Para dar de alta ingrese..");
        var elegir = ReadlineSync.questionInt("1 para auto, 2 para camion, 3 para moto:");
        var marca = ReadlineSync.question("Ingrese la marca: ");
        var modelo = ReadlineSync.question("Ingrese el modelo: ");
        var anio = ReadlineSync.questionInt("Ingrese el anio: ");
        var patente = ReadlineSync.question("Ingrese la patente:");
        var titular = ReadlineSync.question("Ingrese titular:");
        var vehiculo;
        switch (elegir) {
            case 1:
                var cantidadPuertas = ReadlineSync.questionInt("Ingrese cantidad puertas:");
                vehiculo = new Auto(marca, modelo, anio, patente, titular, cantidadPuertas);
                this.listaVehiculos.push(vehiculo);
                break;
            case 2:
                var tara = ReadlineSync.questionInt("Ingrese tara: ");
                var cantidadRuedas = ReadlineSync.questionInt("Ingrese cantidad de ruedas: ");
                vehiculo = new Camion(marca, modelo, anio, patente, titular, tara, cantidadRuedas);
                this.listaVehiculos.push(vehiculo);
                break;
            case 3:
                var cilindrada = ReadlineSync.questionInt("Ingrese cilindrada: ");
                vehiculo = new Moto(marca, modelo, anio, patente, titular, cilindrada);
                this.listaVehiculos.push(vehiculo);
                break;
            default:
                console.log("ingrese una opcion valida.");
                break;
        }
        return this.listaVehiculos;
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
                    this.listaVehiculos[i].setTitular(nuevoT);
                    console.log(this.listaVehiculos);
                    console.log("TITULAR ACTUALIZADO");
                    break;
                case 2:
                    var nuevaP = ReadlineSync.question("Ingrese nueva patente: ");
                    this.listaVehiculos[i].setPatente(nuevaP);
                    console.log(this.listaVehiculos);
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
                console.log(miRegistro.cargarRegistro());
                break;
            case 2:
                console.log(miRegistro.darAlta());
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
