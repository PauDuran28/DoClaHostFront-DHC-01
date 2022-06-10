import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalModule } from './principal/principal.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
// import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes= [

  {
    path:'auth',
    loadChildren :()=>import('./auth/auth.module').then( m => m.AuthModule)
    
  },
  {
    path:'usuarios',
    loadChildren :()=>import('./usuarios/usuarios.module').then( m => m.UsuariosModule),
    // canLoad: [AuthGuard],
    // canActivate:[ AuthGuard]
  },
  {
    path:'productos',
    loadChildren :()=>import('./productos/productos.module').then( m => m.ProductoModule)
  },
  {
    path:'pedido',
    loadChildren :()=>import('./pedido/pedido.module').then( m => m.PedidoModule)
  },

  {
    path:'reserva',
    loadChildren :()=>import('./reserva/reserva.module').then( m => m.ReservaModule)
  },

  
  
  {
    path:'404',
    component: ErrorPageComponent
  },

  {
    path:'**',
    component: PrincipalComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
