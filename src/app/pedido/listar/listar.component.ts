import { Component, OnInit,HostBinding } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido} from '../interfaces/pedido.interfaces'
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  resultbusqueda = '';
  data: any;
  @HostBinding('class') classes = 'row';
 
  pedido :any;
  termino: string = '';
  pedidoSeleccionado: Pedido | undefined;
  

   constructor(private pedidoService:PedidoService)
 { }

  ngOnInit(){
     return this.pedidoService.getPedido().subscribe((data)=>{
      console.log(data);
      this.data=data;
      this.pedido=this.data.pedido;
      console.log(this.pedido);
    }
    )
  }

 
borrarPedido(id_pedido: number){
  this.pedidoService.borrarPedido(id_pedido).subscribe(
    res=> {
      console.log(res);
      this.pedido.getPedido();
    },
    err => console.error(err)
  )
}



//buscar
transform(value: any, arg: any): any {
  if (arg === '' || arg.length < 3) return value;
  const resultbusqueda = [];
  for (const pedido of value) {
    if (pedido.rut_proveedor.indexOf(arg) > -1) {
      resultbusqueda.push(pedido);
    };
  };
  return resultbusqueda;
}

}


