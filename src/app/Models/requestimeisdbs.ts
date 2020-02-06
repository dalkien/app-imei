export interface Requestimeisdbs {
    TipoIdentificacion: string; 
    Canal: string;
    Identificacion: string;
    Imei: string;
    Password:string;
    codigos: responsecodes; 
}

export interface responsecodes{
    codigo: string; 
    descripcion: string; 
    valorcodigo: string;
}