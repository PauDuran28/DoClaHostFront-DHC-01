import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reserva } from '../interfaces/reserva.interfaces';



@Injectable({
  providedIn: 'root'
  
})
export class ReservaService {
  private baseUrl: string= environment.baseUrl

  constructor(private http:HttpClient) { }


    getReserva(){
     return this.http.get(`${this.baseUrl}/reserva`);
    }
    getReservaPorId(id_reserva: number){
     return this.http.get(`${this.baseUrl}/reserva/${id_reserva}`);
    }
  
    getSugerencias(termino: string){
      return this.http.get(`${this.baseUrl}/reserva?q=${termino}&_limit=10`);
    }
    agregarReserva(reservas: Reserva){
      return this.http.post(`${this.baseUrl}/reserva`,reservas);
     }
    actualizarReserva( id_reserva: string |number, actualizarReserva: Reserva): Observable<Reserva> {
      return this.http.put<Reserva>(`${this.baseUrl}/reserva/${id_reserva}`, actualizarReserva);
     }

    borrarReserva(id_reserva: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/reserva/${id_reserva}`);
     }

 
}
