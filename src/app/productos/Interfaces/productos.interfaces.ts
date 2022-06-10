import { Title } from "@angular/platform-browser";

export interface Producto {
    ID_PRODUCTO?:      number,
    CODIGO:            number,
    NOMBRE_PRODUCTO:   string,
    FAMILIA:           string,
    FECHA_VENCIMIENTO?: number,
    TIPO_PRODUCTO:     Categoria,
    PRECIO:            number,
    STOCK:             number,
    STOCK_CRITICO:     number
}

export interface Categoria{
    ID_CATEGORIA: number,
    NOMBRE_CATEGORIA: string
}