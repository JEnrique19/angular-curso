import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 36;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void {
        this.edad = 22;
    }
}