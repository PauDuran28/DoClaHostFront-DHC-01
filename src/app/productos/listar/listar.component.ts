import { Component, OnInit,HostBinding } from '@angular/core';
import { ProductoService } from '../service/productos.service';
import {Producto, Categoria} from '../Interfaces/productos.interfaces';
import { CategoriaService } from '../service/categoria.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  producto:Producto[]=[];
  productos:any=[];
  resultbusqueda = '';
 
  @HostBinding('class') classes = 'row';
 
   constructor(private productoService:ProductoService)
 { }

  ngOnInit(){
    this.getProducto();
  }


getProducto(){
  this.productoService.getProducto().subscribe( res=>{
    this.productos = res;},
    err=> console.error(err)
    );
}

  deleteProducto(id_producto: number) {
    this.productoService.deleteProducto(id_producto).subscribe(
      res => {
        console.log(res);
        this.getProducto();
      },
      err => console.error(err)
    )
  }
  



  //buscar
transform(value: any, arg: any): any {
  if (arg === '' || arg.length < 3) return value;
  const resultbusqueda = [];
  for (const producto of value) {
    if (producto.codigo.indexOf(arg) > -1) {
      resultbusqueda.push(producto);
    };
  };
  return resultbusqueda;
}

}






