import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ErrorPageComponent,
    MenuBarComponent,

  ],
  exports:[
    MenuBarComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule

  ]
})
export class SharedModule { }
