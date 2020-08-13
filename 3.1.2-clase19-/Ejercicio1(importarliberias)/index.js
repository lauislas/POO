"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
function ejemplo(nombre) {
    return "Hola " + nombre;
}
var nombre;
nombre = ReadlineSync.question("Dime tu nombre: ");
console.log(ejemplo(nombre));
