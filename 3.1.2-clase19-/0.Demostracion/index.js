var arreglo = [3, 7, 8, 20, 35];
function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
console.log("La suma es:", sumarArreglo(arreglo));
