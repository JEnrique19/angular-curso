import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  avengers: string[] = ['IronMan', 'Capitan America', 'Black Widow', 'Thor', 'Hilk', 'HawkEye'];
  vengadorBorrado: string = '';


  borrarVengador(): void {
    this.vengadorBorrado = this.avengers.shift() || '';
  }
}
