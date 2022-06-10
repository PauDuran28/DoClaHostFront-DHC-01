import { Component, OnInit,ViewChild,Output, EventEmitter  } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent} from '../dialog/confirm/confirm.component';
import { Pedido,Detalle } from '../interfaces/pedido.interfaces'
import { PedidoService } from '../service/pedido.service';
import { MatTable,MatTableDataSource } from '@angular/material/table';
import { PedidoModule } from '../pedido.module';
import { PedidoRoutingModule } from '../pedido-routing.module';
import { PedidoComponent } from '../pedido/pedido.component';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
  
})
export class CrearComponent implements OnInit {
 

  columnas: string[] = ['codigo', 'descripcion', 'precio','cantidad','sub_total', 'borrar'];

  Detalle:any;
  datos:Detalle[]=[]; 

  ds= new MatTableDataSource<Detalle>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Detalle>;
  
        pedido: Pedido = {
        "id_pedido": 0,
        total: 0,
        rut_proveedor: 0,
        nombre_proveedor: '',
        fecha_emision: new Date(),
        detalle: []
      }


  constructor(private pedidoService: PedidoService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog
            ) { }

  abrirDialogo(){
    const dialogo1 = this.dialog.open(ConfirmComponent,{
      data: this.datos
    });
    dialogo1.afterClosed().subscribe(det =>{
      if(det!= undefined)
      this.agregarDetalle(det);
    });
  }
  agregarDetalle(det: Detalle){
    
    this.datos.push(this.Detalle);
    this.tabla1.renderRows();
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  
  ngOnInit(): void {

    if(!this.router.url.includes('editar') ){

    }

    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.pedidoService.getPedidoPorId( id ) ))
    .subscribe(pedido => this.pedido= pedido);
  }




  guardar(){
    if( this.pedido.nombre_proveedor.trim().length ===0){
      return;
    }
    

    if(this.pedido.id_pedido){
      //actualizar
      this.pedidoService.actualizarPedido(this.pedido).subscribe( _pedido => this.mostrarSnackbar(' Registro Actualizando'));
    }else{
      //crear
      this.pedidoService.agregarPedido(this.pedido).subscribe( pedido => {this.router.navigate(['../pedido/listado', pedido.id_pedido]);
                                                                    this.mostrarSnackbar(' Registro Creado')});
      

    }

    
  }
  borrarPedido(){

     
    const dialog = this.dialog.open(ConfirmComponent,{
        width: '400px',
        data: this.pedido
      });
      dialog.afterClosed().subscribe(
        (result)=>{
          if(result){

            this.pedidoService.borrarPedido( this.pedido.id_pedido!).subscribe( _resp=>{this.router.navigate(['/listado'])})
          }

        }
      )

  }

  mostrarSnackbar(mensaje:string){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2500
    });
  }

 
  
}