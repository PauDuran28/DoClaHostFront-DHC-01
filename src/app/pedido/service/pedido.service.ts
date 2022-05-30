import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../interfaces/pedido.interfaces';



@Injectable({
  providedIn: 'root'
  
})
export class PedidoService {
  private baseUrl: string= environment.baseUrl

  constructor(private http:HttpClient) { }


    getPedido(): Observable<Pedido[]>{
     return this.http.get<Pedido[]>(`${this.baseUrl}/pedido`);
    }
    getPedidoPorId(id_pedido: number): Observable<Pedido>{
     return this.http.get<Pedido>(`${this.baseUrl}/pedido/${ id_pedido}`)
    }
  
    getSugerencias(termino: string):Observable<Pedido[]>{
      return this.http.get<Pedido[]>(`${this.baseUrl}/pedido?q=${termino}&_limit=10`)
    }
    agregarPedido( pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(`${this.baseUrl}/pedido`, pedido)
     }
    actualizarPedido( pedido: Pedido): Observable<Pedido> {
      return this.http.put<Pedido>(`${this.baseUrl}/pedido/${pedido.id_pedido}`, pedido)
     }

    borrarPedido( id_pedido: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/pedido/${id_pedido}`)
     }

     //agregarDetallePedido(pedido: Pedido):Observable<Pedido>{
       //return this.http.put<Pedido>(this.baseUrl, pedido)
     //}
     

 
}
