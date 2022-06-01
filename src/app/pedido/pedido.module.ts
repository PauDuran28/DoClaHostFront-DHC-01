import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PedidoRoutingModule} from './pedido-routing.module'
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './dialog/confirm/confirm.component';



@NgModule({
  declarations: [
    CrearComponent,
    ConfirmComponent,
    ListarComponent,
    BuscarComponent,

  ],
  exports:[
    ListarComponent,
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    MaterialModule,
    FormsModule 


  ]
})
export class PedidoModule { }
