import { Component, OnInit,ViewChild,HostBinding,Pipe,PipeTransform } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource,MatTable } from '@angular/material/table';
import { Producto} from '../Interfaces/productos.interfaces'
import { ProductoService } from '../service/productos.service';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  resultbusqueda = '';
 
  @HostBinding('class') classes = 'row';
  producto :any =[];
  termino: string = '';
  productoSeleccionado: Producto | undefined;
  

   constructor(private productoService:ProductoService)
 { }

  ngOnInit(){
    this.getProducto();
  }

  getProducto() { 
    this.productoService.getProducto()
    .subscribe(
      res => {
       
        this.producto = res;
      },
      err => console.error(err)
    );
}

borrarProducto(id_producto: number){
  this.productoService.borrarProducto(id_producto)
  .subscribe(
    res=> {
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