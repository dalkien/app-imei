export interface Responseimeibdscontent {
    isValid: boolean;
    message: string;
    isReported: boolean;
}

export interface RespuestaPorElemento {
    ConsultaBDAPositiva: Responseimeibdscontent; 
    ConsultaBDONegativa: Responseimeibdscontent;
    ConsultaBDOPositiva: Responseimeibdscontent;
    ConsultaFraudx: Responseimeibdscontent;
    ConsultaImeiComcel: Responseimeibdscontent;
}