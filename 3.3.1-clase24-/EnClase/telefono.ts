/*Implementar las clases y métodos que se muestran 
 Agregar variables/métodos adicionales-uso de herencia*/


class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected volumenActual: number; //agregando variable 

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 20;
        this.volumenActual = 40;
    }

    public mandarMensaje(): void {
        console.log("Enviando mensaje...");

    }

    public hacerLlamada(num: number): string {
        return 'llamando al...' + num;

    }

    public prenderApagar(): void {
        if (this.estaPrendido = !this.estaPrendido) {
        }
    }
    public mostrarBateria(): number { //agregando metodo
        return this.bateriaActual;
    }
    public cargarBateria(): void { //agregando metodo
       this.bateriaActual+=10;
    }

}


class TelefonoConCamara extends Telefono { // clase hija
    public constructor() {
        super();
    }

    public sacarFoto(): void {
        console.log("sacando foto...");
    }
    public grabarVideo(): void { //agregando metodo
        console.log("Grabando video...");
    }
    public subirVolumen(): void { //a traves de protected
        this.volumenActual += 1
    }
    public bajarVolumen(): void {
        this.volumenActual -= 1;
    }

}

class TelefonoConRadio extends Telefono { //clase hija
    private frecuenciaActual: number;

    public constructor() {
        super();

        this.frecuenciaActual = 10;
    }

    public verFrecuenciaActual(): number {
        return this.frecuenciaActual;
    }
    public SubirFrecuencia(): void {
        this.frecuenciaActual += 10;
    }
    public bajarFrecuencia(): void {
        this.frecuenciaActual -= 10;
    }
}

let miTelefonoCamara: TelefonoConCamara = new TelefonoConCamara();

miTelefonoCamara.prenderApagar();
miTelefonoCamara.mandarMensaje();
console.log(miTelefonoCamara.hacerLlamada(2469949));
miTelefonoCamara.sacarFoto();
miTelefonoCamara.grabarVideo();
console.log(miTelefonoCamara);

miTelefonoCamara.subirVolumen();
miTelefonoCamara.mostrarBateria();
console.log(miTelefonoCamara);


console.log("---------------");

let miTelefonoRadio: TelefonoConRadio = new TelefonoConRadio();
miTelefonoRadio.prenderApagar();
miTelefonoRadio.verFrecuenciaActual();
miTelefonoRadio.mostrarBateria();
console.log(miTelefonoRadio);

miTelefonoRadio.cargarBateria();
miTelefonoRadio.SubirFrecuencia();
console.log(miTelefonoRadio);