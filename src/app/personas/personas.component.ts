import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html'

})
export class PersonasComponent{
    deshabilitar = false;
    mensaje="";
    titulo='';
    mostrar= true;

    activarPersona(){
        this.mostrar = false;
    }

    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }

    
}