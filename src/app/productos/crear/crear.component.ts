import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { Producto, Categoria} from '../Interfaces/productos.interfaces';
import { CategoriaService } from '../service/categoria.service';
import { ProductoService } from '../service/productos.service';
import { DatePipe } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './format-datepicker';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class CrearComponent implements OnInit {
 
  SendDataonChange(event: any) {
    console.log(event.target.value);
    }

  selectChanged: any;
 
  
  formatDate(date: Date): string{
    const day= date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
    
  }

  CategoriaLista:any;
  SelectedValue:any;
  CambiarCategoria(e: any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value;
  }

 @HostBinding('class') classes= 'row';
 
 categorias: Categoria[]=[];

 categoria: Categoria ={
  ID_CATEGORIA:0,
  NOMBRE_CATEGORIA: ''
  }

    producto: Producto = {
      ID_PRODUCTO:  0,
      CODIGO: 0,
      NOMBRE_PRODUCTO:   '',
      FAMILIA:           '',
      FECHA_VENCIMIENTO: Date.now(),
      PRECIO:            0,
      STOCK:             0,
      STOCK_CRITICO:     0,
      TIPO_PRODUCTO:     this.categoria

      
  };
 
  

  edit:boolean= false
 



  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private categoriaService: CategoriaService
              ) {}

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params['id_producto']) {
      this.productoService.getProducto()
        .subscribe(
          res => {
            console.log(res);
            params['producto'] = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

    this.categoriaService.getCategoria().subscribe((data: any)=>
    this.CategoriaLista=data)
  }

  id_producto: number=0;
  codigo:number=0;
  nombre_producto:string="";
  familia:string="";
  fecha_vencimiento: number= Date.now();
  tipo_producto:string = 'this.CategoriaLista';
  precio:number=0;
  stock:number=0;
  stock_critico:number=0;
Productos : Producto[]=[];

  addProducto(){
    this.productoService.insertProducto( this.id_producto,this.codigo,this.nombre_producto,this.familia,this.fecha_vencimiento,this.tipo_producto,this.precio,this.stock,this.stock_critico)
    .subscribe((res: Producto[])=>{
      this.id_producto=0;
      this.Productos = res;
      this.codigo=0;
      this.nombre_producto="";
      this.familia="";
      this.fecha_vencimiento = Date.now();
      this.tipo_producto= "";
      this.precio=0;
      this.stock=0;
      this.stock_critico=0;
    })
  
  }

  

  updateProducto() {
    this.productoService.updateProducto(this.id_producto,this.codigo,this.nombre_producto,this.familia,this.fecha_vencimiento,this.tipo_producto,this.precio,this.stock,this.stock_critico)
    .subscribe((res: Producto[]) => {
      this.id_producto=0;
      this.Productos = res;
      this.codigo=0;
      this.nombre_producto="";
      this.familia="";
      this.fecha_vencimiento =Date.now();
      this.tipo_producto= "";
      this.precio=0;
      this.stock=0;
      this.stock_critico=0;
})

}


}
