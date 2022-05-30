import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { ProductoModule } from '../productos/productos.module';
import { ProductoRoutingModule } from '../productos/producto-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ProductoModule,
    ProductoRoutingModule,
  
  ]
})
export class PrincipalModule { }
