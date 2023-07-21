import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html'

})
export class PersonasComponent{
    deshabilitar = false;
    mensaje="No se ha agregado ninguna persona";
    titulo='';

    activarPersona(){
        this.mensaje = "Se ha agregado persona"
    }

    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }

    
}