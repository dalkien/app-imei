import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Requestimeisdbs} from '../Models/requestimeisdbs';
import { Responseimeibds } from '../Models/responseimeibds';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  private respuestaDatos: Responseimeibds ;
  private test: any ; 
  constructor(private httpClient: HttpClient ) { }
  
  getImeisBDs(data: Requestimeisdbs ){
      this.test = this.httpClient.get('/DEVQA/WsImeiProcess/api/ImeiProcesos/GetImeisBDs?TipoIdentificacion=3&Canal=TCRM&Identificacion=680301781-3&Imei=352527091504668&Password=passTCRM')
            .subscribe(datos =>{this.respuestaDatos = datos as Responseimeibds;
               console.log(this.respuestaDatos); });
  }
  
  getRespuestaBDs(){
    return this.respuestaDatos; 
  }
  getidentification(){
    return this.httpClient.get('');
  }
}