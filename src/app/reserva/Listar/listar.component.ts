import { Component, OnInit,ViewChild,HostBinding,Pipe,PipeTransform } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource,MatTable } from '@angular/material/table';
import { Reserva} from '../interfaces/reserva.interfaces';
import { ReservaService } from '../service/reserva.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  
  resultbusqueda = '';
  data: any;
  @HostBinding('class') classes = 'row';
 
  reserva :any;
  termino: string = '';
  reservaSeleccionado: Reserva | undefined;
  

   constructor(private reservaService:ReservaService)
 { }

  ngOnInit(){
     return this.reservaService.getReserva().subscribe((data)=>{
      console.log(data);
      this.data=data;
      this.reserva=this.data.reserva;
      console.log(this.reserva);
    }
    )
  }

 
borrarReserva(id_reserva: number){
  this.reservaService.borrarReserva(id_reserva).subscribe(
    res=> {
      console.log(res);
      this.reserva.getReserva();
    },
    err => console.error(err)
  )
}



//buscar
transform(value: any, arg: any): any {
  if (arg === '' || arg.length < 3) return value;
  const resultbusqueda = [];
  for (const reserva of value) {
    if (reserva.rut.indexOf(arg) > -1) {
      resultbusqueda.push(reserva);
    };
  };
  return resultbusqueda;
}

}


