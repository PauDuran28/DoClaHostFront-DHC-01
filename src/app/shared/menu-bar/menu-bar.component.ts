import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu-bar.component.html',
  styles: [
  ]
})
export class MenuBarComponent  {

  
 
   constructor(private router: Router) { }
 
   logout(){
     this.router.navigate(['./auth'])
   }
 }
 