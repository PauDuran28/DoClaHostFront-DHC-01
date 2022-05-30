import { Title } from "@angular/platform-browser";

export interface Producto {
    id_producto?:      number;
    codigo:            number;
    nombre_producto:   string;
    familia:           string;
    fecha_vencimiento?: Date;
    tipo_producto:     string;
    precio:            number;
    stock:             number;
    stock_critico:     number;
}

