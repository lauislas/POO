class Auto {
    private marca: string;
    private modelo: string;
    private velocidadActual: number = 40;
    private anio: number = 2020;

    public constructor(marca: string, modelo: string, anio?: number) {
        this.marca = marca;
        this.modelo = modelo;

        if (anio) {
            this.anio = anio;
        } else {
            this.anio = this.anio;
        }
    }

    public acelerar(velocidad): void {
        this.velocidadActual = this.velocidadActual + velocidad;
    }
    public getMarca(): string {
        return this.marca;
    }
}

let primerAuto: Auto = new Auto("ford", "Fiesta", 1999);
let segundoAuto: Auto = new Auto("Renault", "Clio");
let tercerAuto: Auto = new Auto("Peugeot", "307");

console.log(primerAuto);
console.log("La marca del auto es:", primerAuto.getMarca());
console.log("----------------");
console.log(segundoAuto);
console.log("La marca del auto es:", segundoAuto.getMarca());
console.log(tercerAuto);
console.log("----------------");
let arregloAutos: Auto[] = [primerAuto, segundoAuto, tercerAuto];
console.log(arregloAutos);