import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedido } from '../../interfaces/pedido.interfaces';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pedido) { }

  ngOnInit(): void {
  }


  borrar(){
    this.dialogRef.close(true);
  }
  cancelar(){
    this.dialogRef.close();
  }
}

