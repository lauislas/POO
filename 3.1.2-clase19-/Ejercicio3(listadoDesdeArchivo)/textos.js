"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('abc.txt', 'utf8');
console.log(texto);
console.log("------------- ");
console.log("Convirtiendo el texto en un arreglo: ");
var arreglo = texto.split(' ');
console.log(arreglo);
