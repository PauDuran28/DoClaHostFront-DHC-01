import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { Producto} from '../Interfaces/productos.interfaces'
import { ProductoService } from '../service/productos.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
 
})
export class CrearComponent implements OnInit {

 @HostBinding('class') classes= 'row';
  

    producto: Producto = {
      id_producto:  0,
      codigo: 0,
      nombre_producto:   '',
      familia:           '',
      fecha_vencimiento: new Date(),
      tipo_producto:     '',
      precio:            0,
      stock:             0,
      stock_critico:     0,
   
  };

  edit:boolean= false



  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params['id_producto']) {
      this.productoService.getProductoPorId(params['id_producto'])
        .subscribe(
          res => {
            console.log(res);
            params['producto'] = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  agregarProducto() {
    delete this.producto.id_producto;
    delete this.producto.fecha_vencimiento;
    this.productoService.agregarProducto(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.error(err)
      )
  }

  actualizarProducto() {
    delete this.producto.fecha_vencimiento;
    this.productoService.actualizarProducto(this.producto.id_producto!, this.producto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.error(err)
      )
  }

}



