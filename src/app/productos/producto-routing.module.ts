import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ProductosComponent } from './productos/productos.component';

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
        component: ProductosComponent,
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
export class ProductoRoutingModule { }
