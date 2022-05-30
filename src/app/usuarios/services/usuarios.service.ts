import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuarios.interfaces';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl: string= environment.baseUrl

  constructor(private http:HttpClient) { }


    getUsuarios(): Observable<Usuario[]>{
     return this.http.get<Usuario[]>(`${this.baseUrl}/users`);
    }
    getUsuarioPorId(user_id: number): Observable<Usuario>{
     return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${ user_id }`)
    }
  
    getSugerencias(termino: string):Observable<Usuario[]>{
      return this.http.get<Usuario[]>(`${this.baseUrl}/users?q=${termino}&_limit=6`)
    }
    agregarUsuario( usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(`${this.baseUrl}/users`, usuario)
     }
    actualizarUsuario( usuario: Usuario): Observable<Usuario> {
      return this.http.put<Usuario>(`${this.baseUrl}/users/${usuario.user_id}`, usuario)
     }

    borrarUsuario( user_id: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/users/${user_id}`,)
     }
}
