import * as fs from 'fs'; 
let texto: string = fs.readFileSync('abc.txt', 'utf8'); 
console.log(texto);

console.log("------------- ");
console.log("Convirtiendo el texto en un arreglo: ");
let arreglo: string[] = texto.split(' ');
console.log(arreglo);