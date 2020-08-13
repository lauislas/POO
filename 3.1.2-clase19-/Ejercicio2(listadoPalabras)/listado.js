"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var arregloPalabras = [];
function cargarArreglo() {
    var palabra = ReadlineSync.question("Ingrese palabra y vacio para finalizar: ");
    while (palabra != "") {
        arregloPalabras.push(palabra);
        palabra = ReadlineSync.question("Ingrese palabra y vacio para finalizar: ");
    }
    console.log(arregloPalabras);
}
function insertarPalabra() {
    var insertar = ReadlineSync.question("Inserte nueva palabra al listado: ");
    arregloPalabras.push(insertar);
    console.log(arregloPalabras);
}
function buscarPalabra(busqueda) {
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] == busqueda) {
            return i;
        }
    }
    return -1;
}
function encontrarPalabra() {
    var encontrar = ReadlineSync.question("Indique la palabra a buscar: ");
    var posicion = buscarPalabra(encontrar);
    if (posicion != -1) {
        console.log("La palabra", encontrar, "se encuentra en la posición ", posicion, "del listado.");
    }
    else {
        console.log("La palabra NO se encuentra en el listado.");
    }
}
function eliminarPalabra() {
    var eliminar = ReadlineSync.question("palabra a eliminar: ");
    var i = buscarPalabra(eliminar);
    if (i != -1) {
        arregloPalabras.splice(buscarPalabra(eliminar), 1);
        console.log(arregloPalabras);
    }
    else {
        console.log("No existe la palabra");
    }
}
function actualizar() {
    var buscarActualizar = ReadlineSync.question("Indique la palabra a buscar: ");
    var i = buscarPalabra(buscarActualizar);
    if (i != -1) {
        var palabraReemplazar = ReadlineSync.question("Indique la palabra a reemplazar: ");
        arregloPalabras[i] = palabraReemplazar;
        console.log(arregloPalabras);
    }
    else {
        console.log("Error, palabra no encontrada para actualizar");
    }
}
function menu(arregloPalabras) {
    var elegirMenu = ReadlineSync.questionInt("\n Ingrese..\n[1]Para cargar listado.\n[2]Para insertar nueva palabra.\n[3]Para buscar palabra en el listado.\n[4]Para eliminar palabra.\n[5]Para actualizar palabra.\n[6]Para imprimir listado.\n[0]Para salir.\nNum: ");
    while (elegirMenu != 0) {
        switch (elegirMenu) {
            case 1:
                cargarArreglo();
                break;
            case 2:
                insertarPalabra();
                break;
            case 3:
                encontrarPalabra();
                break;
            case 4:
                eliminarPalabra();
                break;
            case 5:
                actualizar();
                break;
            case 6:
                console.log(arregloPalabras);
                break;
            default:
                console.log("Ingrese una opción válida.");
                break;
        }
        elegirMenu = ReadlineSync.questionInt("\n Ingrese..\n[1]Para cargar listado.\n[2]Para insertar nueva palabra.\n[3]Para buscar palabra en el listado.\n[4]Para eliminar palabra.\n[5]Para actualizar palabra.\n[6]Para imprimir listado.\n[0]Para salir.\nNum: ");
    }
}
menu(arregloPalabras);
