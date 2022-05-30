import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { UsuarioComponent } from './usuario/usuario.component';





const route: Routes= [
  {

    path: '',
    
    children:[
      {
        path: 'listado',
        component: ListarComponent,
      },
      {
        path: 'agregar',
        component: CrearComponent,
      },
      {
        path: 'editar/:id', 
        component: CrearComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: ':id',
        component: UsuarioComponent,
      },
      {
        path: '**',
        redirectTo: 'listado'
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ],
})
export class UsuariosRoutingModule { }
