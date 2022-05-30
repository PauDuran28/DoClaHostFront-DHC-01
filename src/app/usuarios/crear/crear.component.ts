import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';

import { Gender, Usuario } from '../interfaces/usuarios.interfaces';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
 
})
export class CrearComponent implements OnInit {

  
  usuarios: Usuario = {
    "user_id":  0,
    dni:          0,
    dv:           0,
    first_name:   '',
    last_name:    '',
    email:        '',
    phone_number:  0,
    gender:       Gender.hombre,
  }

  gender = [
    {
      id: 'Hombre',
      desc: 'Hombre'
    },
    {
      id: 'Mujer',
      desc: 'Mujer'
    }
  ]

  constructor(private usuarioService: UsuariosService,
             private activatedRoute: ActivatedRoute,
             private router:Router,
             private snackBar: MatSnackBar,
             private dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar') ){

    }

    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.usuarioService.getUsuarioPorId( id ) ))
    .subscribe(usuarios => this.usuarios= usuarios );
  }



  guardar(){
    if( this.usuarios.first_name.trim().length ===0){
      return;
    }
    else if( this.usuarios.last_name.trim().length ===0){
      return;
    }

    if(this.usuarios.user_id){
      //actualizar
      this.usuarioService.actualizarUsuario(this.usuarios).subscribe(usuarios => this.mostrarSnackbar(' Registro Actualizando'));
    }else{
      //crear
      this.usuarioService.agregarUsuario(this.usuarios).subscribe( usuarios => {this.router.navigate(['/usuarios/listado', usuarios.user_id]);
                                                                       this.mostrarSnackbar(' Registro Creado')});
      

    }

    
  }
  borrarUsuarios(){

     
    const dialog = this.dialog.open(ConfirmComponent,{
        width: '400px',
        data: this.usuarios
      });
      dialog.afterClosed().subscribe(
        (result)=>{
          if(result){

            this.usuarioService.borrarUsuario( this.usuarios.user_id!).subscribe( resp=>{this.router.navigate(['/listado'])})
          }

        }
      )

  }

  mostrarSnackbar(mensaje:string){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2500
    });
  }
  
}


