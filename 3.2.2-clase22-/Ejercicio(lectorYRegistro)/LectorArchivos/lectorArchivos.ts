import * as fs from 'fs';

class LectorArchivo { //carga archivo de texto
    private archivoTxt: string;

    constructor(archivoTxt: string) {
        this.archivoTxt = archivoTxt;
    }

    public leerArchivo(): string[] {
        let archivo: string = fs.readFileSync(this.archivoTxt, 'utf8');
        let separar: string[] = archivo.split('\r\n');
        return separar;
    }
}

let lector = new LectorArchivo('./texto.txt')
console.log(lector.leerArchivo());