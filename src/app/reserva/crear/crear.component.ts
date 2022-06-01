import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ReservaComponent } from '../reserva/reserva.component';
import { ReservaService } from '../service/reserva.service';
import { Reserva } from '../interfaces/reserva.interfaces';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
 
})
export class CrearComponent implements OnInit {

  @HostBinding('class') classes= 'row';


  reserva: Reserva = {
    id_reserva:      0,
    fecha_inicio:    new Date(),
    fecha_salida:    new Date(),
    cant_personas:   0,
    tipo_habitacion: '',
    rut:             '',
    nombre:          '',
    email:           '',
    telefono:         0,
 
};

edit:boolean= false



    constructor(private reservaService: ReservaService,
                private activatedRoute: ActivatedRoute,
                private router:Router
        ) { }


ngOnInit(){
  const params = this.activatedRoute.snapshot.params;
  if (params['id_reserva']) {
    this.reservaService.getReservaPorId(params['id_reserva'])
      .subscribe(
        res => {
          console.log(res);
          params['reserva'] = res;
          this.edit = true;
        },
        err => console.log(err)
      )
  }
}

agregarReserva() {
  delete this.reserva.id_reserva;
  delete this.reserva.fecha_inicio;
  delete this.reserva.fecha_salida;
  this.reservaService.agregarReserva(this.reserva)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/reserva']);
      },
      err => console.error(err)
    )
}

actualizarReserva() {
  delete this.reserva.fecha_inicio;
  delete this.reserva.fecha_salida;
  this.reservaService.actualizarReserva(this.reserva.id_reserva!, this.reserva)
    .subscribe(
      res => { 
        console.log(res);
        this.router.navigate(['/reserva']);
      },
      err => console.error(err)
    )
}


}



