import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Categoria, Producto } from '../Interfaces/productos.interfaces';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
  
})
export class CategoriaService {
 

  constructor(private http:HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "content-type":"application/json"
})

   //listar categoria
  getCategoria(): Observable<Categoria[]>{
    const url="http://localhost:4201/getCategoria";
    return this.http.get<Categoria[]>(url);
}

//editar por id
getCategorias(ID_CATEGORIA: number): Observable<Categoria[]>{
  const url = "http://localhost:4201/addCategoria/" + ID_CATEGORIA;
  return this.http.get<Categoria[]>(url);
}

//insert categoria
insertCategoria( NOMBRE_CATEGORIA:string): Observable<Categoria[]>{
    const url="http://localhost:4201/addCategoria";
    return this.http.post<Categoria[]>(
        url,
        {
          
          "NOMBRE_CATEGORIA":NOMBRE_CATEGORIA
        },
        {headers:this.headers}).pipe(map(data=>data));
      }


//update categoria
updateCategoria(ID_CATEGORIA:number, NOMBRE_CATEGORIA:string): Observable<Categoria[]>{
  const url = "http://localhost:4201/updateCategoria";
  return this.http.put<Categoria[]>(
      url,
      {
        "ID_CATEGORIA":ID_CATEGORIA,
        "NOMBRE_CATEGORIA":NOMBRE_CATEGORIA
    },
      {headers:this.headers}).pipe(map(data=>data));
  }


  
//delete categoria

deleteCategoria(ID_CATEGORIA: number): Observable<Categoria[]>{
  const url = "http://localhost:4201/deleteCategoria/" + ID_CATEGORIA;
  return this.http.delete<Categoria[]>(url).pipe(map(data => data));
}
}