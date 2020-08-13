import * as fs from 'fs'
let colegios: string = fs.readFileSync('colegios.txt', 'utf8');
let arregloColegios: string[] = colegios.split(",");
console.log("Colegios donde se vota:", arregloColegios);

let personas: string = fs.readFileSync('nombres.txt', 'utf8');
let arregloNombres: string[] = personas.split(",");
console.log("Personas que votan: ", arregloNombres);


function asignarColegio(arregloNombres: string) {
    let inicialNombre: string = arregloNombres.charAt(0);
    switch (inicialNombre) {
        case "A": case "B": case "C": case "D": case "E":
            return arregloColegios[0];
        case "F": case "G": case "H": case "I": case "J":
            return arregloColegios[1];
        case "K": case "L": case "M": case "N": case "O":
            return arregloColegios[2];
        case "P": case "Q": case "R": case "S": case "T":
            return arregloColegios[3];
        default:
            return arregloColegios[4];

    }
}

for (let i: number = 0; i < arregloNombres.length; i++) {
    console.log(`A ${arregloNombres[i]} le toca votar en:`, asignarColegio(arregloNombres[i]));
}
