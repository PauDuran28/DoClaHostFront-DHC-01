import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../interfaces/usuarios.interfaces';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  user:any=[];

  

  displayedColumns: string[] = ['dni','email','first_name','gender','phone_number'];
  dataSource:any = new MatTableDataSource();
      //buscar
    termino: string = '';
    usuario: Usuario[]=[];
    usuarioSeleccionado: Usuario | undefined;

  constructor(
    private usuariosService:UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(user =>{
      console.log(user,"user");
      this.user = user;
      this.dataSource = new MatTableDataSource(this.user);
    });
  }


  //buscador
  
buscando() {

  this.usuariosService.getSugerencias( this.termino.trim() )
    .subscribe( usuario => this.usuario = usuario );

}

opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

  if(!event.option.value) {
    this.usuarioSeleccionado = undefined;
    return;
  }

  const usuario:Usuario  = event.option.value;
  this.termino = usuario.first_name;

  this.usuariosService.getUsuarioPorId( usuario.user_id! )
    .subscribe(usuario => this.usuarioSeleccionado = usuario );
}

  } 
