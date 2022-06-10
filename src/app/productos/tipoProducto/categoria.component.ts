import { Component, OnInit } from '@angular/core';
import { Producto,Categoria } from '../Interfaces/productos.interfaces';
import { CategoriaService } from '../service/categoria.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',

})

export class CategoriaComponent implements OnInit {

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit(): void{
    
    this.categoriaService.getCategoria().subscribe((res: Categoria[])=> {
      this.Categorias = res;
      
    })
  }

  id_categoria: number= 0;
  nombre_categoria:    string= "";
 
  Categorias: Categoria[]=[];
 

addCategoria(){
  this.categoriaService.insertCategoria( this.nombre_categoria)
  .subscribe((res: Categoria[])=>{
    this.Categorias = res;
    this.id_categoria= 0;
    this.nombre_categoria= "";
 
  })

}


getCategorias(id_categoria: number,nombre_categoria: string) {
  this.id_categoria = id_categoria;
  this.nombre_categoria = nombre_categoria;


}

updateCategoria() {

  this.categoriaService.updateCategoria(this.id_categoria,this.nombre_categoria)
    .subscribe((res: Categoria[]) => {
      this.Categorias = res;
      this.id_categoria= 0;
      this.nombre_categoria= "";
 
    })
}

deleteCategoria(id_categoria: number) {
  this.categoriaService.deleteCategoria(id_categoria).subscribe((res: Categoria[]) => {
    this.Categorias = res;
  })
}



}

