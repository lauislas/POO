let arreglo : number[] = [3, 7, 8, 20, 35];

function sumarArreglo(arreglo:number[]):number {
    let suma:number = 0;
    for (let i:number = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

console.log("La suma es:",sumarArreglo(arreglo));

