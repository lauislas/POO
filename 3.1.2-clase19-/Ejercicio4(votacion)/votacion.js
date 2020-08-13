"use strict";
exports.__esModule = true;
var fs = require("fs");
var colegios = fs.readFileSync('colegios.txt', 'utf8');
var arregloColegios = colegios.split(",");
console.log("Colegios donde se vota:", arregloColegios);
var personas = fs.readFileSync('nombres.txt', 'utf8');
var arregloNombres = personas.split(",");
console.log("Personas que votan: ", arregloNombres);
function asignarColegio(arregloNombres) {
    var inicialNombre = arregloNombres.charAt(0);
    switch (inicialNombre) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
            return arregloColegios[0];
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
            return arregloColegios[1];
        case "K":
        case "L":
        case "M":
        case "N":
        case "O":
            return arregloColegios[2];
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
            return arregloColegios[3];
        default:
            return arregloColegios[4];
    }
}
for (var i = 0; i < arregloNombres.length; i++) {
    console.log("A " + arregloNombres[i] + " le toca votar en:", asignarColegio(arregloNombres[i]));
}
