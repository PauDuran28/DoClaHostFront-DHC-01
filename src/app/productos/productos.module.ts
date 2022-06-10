import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProductoRoutingModule} from './producto-routing.module'
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './tipoProducto/categoria.component';
import {MatSelectModule} from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-US'},
  ],
  declarations: [
    CrearComponent,
    ListarComponent,
    BuscarComponent,
    CategoriaComponent

  ],
  exports:[
    ListarComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ProductoModule { }
