import { Component, OnInit } from '@angular/core';
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

  pedido:any=[];

 

  displayedColumns: string[] = ['id_pedido','rut_proveedor','nombre_proveedor','fecha_emision','total'];
  dataSource:any = new MatTableDataSource();
  
    termino: string = '';
    pedidos: Pedido[]=[];
    pedidoSeleccionado: Pedido | undefined;

  constructor(
    private pedidoService:PedidoService
  ) { }
  
  ngOnInit(): void {
    this.pedidoService.getPedido().subscribe(pedido =>{
      console.log(pedido,"pedido");
      this.pedido = pedido;
      this.dataSource = new MatTableDataSource(this.pedido);
    });
  }



  
buscando() {

  this.pedidoService.getSugerencias( this.termino.trim() )
    .subscribe( pedido => this.pedido = pedido );

}

opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

  if(!event.option.value) {
    this.pedidoSeleccionado = undefined;
    return;
  }

  const pedido:Pedido  = event.option.value;
  this.termino = pedido.nombre_proveedor;

  this.pedidoService.getPedidoPorId( pedido.id_pedido! )
    .subscribe(pedido => this.pedidoSeleccionado = pedido );
}


  } 
