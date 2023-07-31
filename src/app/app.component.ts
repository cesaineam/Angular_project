import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo desde angular';
  titulo ='Listado de personas';
  personas: Persona[]=[
    new Persona('Juan','Perez'),
    new Persona('Laura','Juarez'),
    new Persona('Karla','Lara')
  ];
  nombreInput='';
  apellidoInput='';

  agregarPersona(){
    this.personas.push(new Persona(this.nombreInput,this.apellidoInput))
  }
}
