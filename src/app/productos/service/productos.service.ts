import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../Interfaces/productos.interfaces';



@Injectable({
  providedIn: 'root'
  
})
export class ProductoService {
  private baseUrl: string= environment.baseUrl

  constructor(private http:HttpClient) { }


    getProducto(){
     return this.http.get(`${this.baseUrl}/producto`);
    }
    getProductoPorId(id_producto: number){
     return this.http.get(`${this.baseUrl}/producto/${id_producto}`);
    }
  
    getSugerencias(termino: string){
      return this.http.get(`${this.baseUrl}/producto?q=${termino}&_limit=10`);
    }
    agregarProducto(productos: Producto){
      return this.http.post(`${this.baseUrl}/producto`,productos);
     }
    actualizarProducto( id_producto: string |number, actualizarProducto: Producto): Observable<Producto> {
      return this.http.put<Producto>(`${this.baseUrl}/producto/${id_producto}`, actualizarProducto);
     }

    borrarProducto(id_producto: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/producto/${id_producto}`);
     }

 
}
