import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h1>La base es</h1>
        <h2>{{base}}</h2>
        <button (click)="operacion(base)">+{{base}}</button>
        <button (click)="operacion(-base)">-{{base}}</button>
        <h2>{{numero}}</h2>
    `
})
export class ContadorComponent {
    titulo: string = 'Pruebas Angular';
    numero: number = 0;
    base: number = 5;
  
    operacion(valor:number) {
      this.numero += valor;
    }
}