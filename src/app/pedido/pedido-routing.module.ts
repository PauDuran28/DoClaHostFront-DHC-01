import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'editar/:id', 
        component: CrearComponent,
      },
      {
        path: ':id',
        component: PedidoComponent,
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
    RouterModule.forChild(route),
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule 
  ],
  exports:[
    RouterModule
  ],
})
export class PedidoRoutingModule { }
