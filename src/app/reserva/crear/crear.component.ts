import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ReservaComponent } from '../reserva/reserva.component';
import { ReservaService } from '../service/reserva.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
 
})
export class CrearComponent implements OnInit {
    ngOnInit(): void {
      
    }
    constructor(private reservaService: ReservaService,
                private activatedRoute: ActivatedRoute,
                private router:Router
        ) { }
}



