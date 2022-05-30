import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProductoRoutingModule} from './producto-routing.module'
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    BuscarComponent

  ],
  exports:[
    ListarComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductoModule { }
