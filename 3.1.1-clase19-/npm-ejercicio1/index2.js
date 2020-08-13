let readlineSync = require('readline-sync');

let arregloDimension = readlineSync.questionInt("indique dimension del arreglo: ");

let arreglo = new Array(arregloDimension);

let i=0;
let positivos=0;
let negativos=0;
let numero0=0;
let numIngresados=0;

for(i=0; i < arregloDimension; i++) {
   numIngresados = readlineSync.questionInt("indique numero: ");
   
   if ( numIngresados==0) {
      arreglo[i]=numero0++

   } else {
      if (numIngresados > 0){
         arreglo[i]=positivos++
      
      }else{
         arreglo[i]=negativos++
      }
   }
}

console.log( `Hay ${positivos}, positivos`);
console.log( `Hay ${negativos}, negativos`);     
console.log( `Hay ${numero0},ceros`); 