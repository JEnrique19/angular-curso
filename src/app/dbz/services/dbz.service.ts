import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 800
    }, {
        nombre: 'Krillin',
        poder: 400
    }];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(newData: Personaje){
        this._personajes.push(newData);
    }
}