import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './Listar/listar.component';
import { ReservaComponent } from './reserva/reserva.component';

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
        path: ':id',
        component: ReservaComponent,
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
export class ReservaRoutingModule { }
