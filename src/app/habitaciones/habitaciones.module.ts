import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservarComponent } from './reservar/reservar.component';
import { VerComponent } from './ver/ver.component';



@NgModule({
  declarations: [
    ReservarComponent,
    VerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionesModule { }
