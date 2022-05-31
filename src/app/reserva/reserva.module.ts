import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './Listar/listar.component';
import { ReservaRoutingModule} from './reserva-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent

  ],
  exports:[
    ListarComponent,
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ReservaModule { }
