import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../Interfaces/productos.interfaces';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
  
})
export class ProductoService {
 

  constructor(private http:HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "content-type":"application/json"
})

   //listar usuario
  getProducto(): Observable<Producto[]>{
    const url="http://localhost:4201/getProducto";
    return this.http.get<Producto[]>(url);
}

//editar por id
getProductos(id_producto: number): Observable<Producto[]>{
  const url = "http://localhost:4201/addProducto/" + id_producto;
  return this.http.get<Producto[]>(url);
}

//insert usuario
insertProducto(id_producto:number, codigo:number,nombre_producto:string,familia:string,fecha_vencimiento:number, tipo_producto:string,precio:number,stock:number,stock_critico:number): Observable<Producto[]>{
    const url="http://localhost:4201/addProducto";
    return this.http.post<Producto[]>(
        url,
        {
          "id_producto":id_producto,
          "codigo":codigo,
          "ombre_producto":nombre_producto,
          "familia":familia,
          "fecha_vencimiento":fecha_vencimiento,
          "tipo_producto": tipo_producto ,
          "precio": precio ,
          "stock": stock ,
          "stock_critico": stock_critico
        },
        {headers:this.headers}).pipe(map(data=>data));
      }


//update producto
updateProducto(id_producto:number, codigo:number,nombre_producto:string,familia:string,fecha_vencimiento:number, tipo_producto:string,precio:number,stock:number,stock_critico:number): Observable<Producto[]>{
  const url = "http://localhost:4201/updateProducto";
  return this.http.put<Producto[]>(
      url,
      {
        "id_producto":id_producto,
        "codigo":codigo,
        "ombre_producto":nombre_producto,
        "familia":familia,
        "fecha_vencimiento":fecha_vencimiento,
        "tipo_producto": tipo_producto ,
        "precio": precio ,
        "stock": stock ,
        "stock_critico": stock_critico},
      {headers:this.headers}).pipe(map(data=>data));
  }


  
//delete usuario

deleteProducto(id_producto: number): Observable<Producto[]>{
  const url = "http://localhost:4201/deleteProducto/" + id_producto;
  return this.http.delete<Producto[]>(url).pipe(map(data => data));
}

formatDate(date: Date): string{
  const day= date.getDate();
  const month = date.getMonth()+1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
}