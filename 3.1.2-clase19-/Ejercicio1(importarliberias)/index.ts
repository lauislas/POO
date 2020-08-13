import * as ReadlineSync from "./node_modules/readline-sync"

function ejemplo(nombre: string): String { 
    return "Hola " + nombre; 
}

let nombre: string;
nombre = ReadlineSync.question("Dime tu nombre: ");

console.log(ejemplo(nombre));
