export interface Pedido {
 
    id_pedido:        number;
    rut_proveedor:     number;
    nombre_proveedor:  string;
    fecha_emision:     Date;
    total:             number;
    detalle: Detalle[];
  

}

export interface Detalle{
    codigo:           number;
    cantidad:         number;
    precio:           number;
    sub_total:        number;
    descripcion:      string;
}


