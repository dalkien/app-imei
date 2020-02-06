import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Requestimeisdbs } from 'src/app/Models/requestimeisdbs';
import { Observable } from 'rxjs';
import { Responseimeibds } from 'src/app/Models/responseimeibds';
import { Responseimeibdscontent, RespuestaPorElemento } from 'src/app/Models/responseimeibdscontent';

@Component({
  selector: 'app-consultaformulariobds',
  templateUrl: './consultaformulariobds.component.html',
  styleUrls: ['./consultaformulariobds.component.css']
})
export class ConsultaformulariobdsComponent implements OnInit {
  
  requestDatos:  Requestimeisdbs ;
  respuesta: any; 
  respuestaDatos: Responseimeibds ; 
  mensaje: RespuestaPorElemento; 
  constructor(private servicios: ServiciosService) { }

  ngOnInit() {
     this.servicios.getImeisBDs(this.requestDatos);
  }

  getMensaje(){
    if(this.mensaje != undefined){
      return true; 
    }
    return false;
  }
  async getConsulta(){
    //{debugger;}
    //this.servicios.getImeisBDs(this.requestDatos);
    this.respuestaDatos = this.servicios.getRespuestaBDs();
    if (this.respuestaDatos != undefined) {
      //{debugger;};
      let mensajeD = JSON.parse(this.respuestaDatos.message); 
      {console.log(mensajeD)};
      this.mensaje = mensajeD;
      
      return true;
    }else{
      return false; 
    };
  }

}
