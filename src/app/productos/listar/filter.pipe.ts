import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

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

   

     ///   var datePipe = new DatePipe("en-ES");
      //   value = datePipe.transform(value, 'dd/MM/yyyy');
        // return value;
    // }

     //formatDate(date: Date): string{
      //const day= date.getDate();
     // const month = date.getMonth()+1;
      //const year = date.getFullYear();
    
      //return `${year}-${month}-${day}`;
      
    //}
  

}
