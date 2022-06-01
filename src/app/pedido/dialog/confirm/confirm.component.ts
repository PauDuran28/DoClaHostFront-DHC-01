import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedido,Detalle } from '../../interfaces/pedido.interfaces';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {
  codigo!: number;
  cantidad!:number;
  precio!:number;
  sub_total!:number;
  descripcion!:string;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Detalle) { }

  ngOnInit(){
  }


  borrar(){
    this.dialogRef.close(true);
  }
  cancelar(){
    this.dialogRef.close();
  }
}

