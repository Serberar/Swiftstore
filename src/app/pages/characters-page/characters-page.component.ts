import { ProductosService } from './../../shared/services/productos.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent {



  constructor(private ProductosService: ProductosService){}

  datos: any=[];
  numeroProductos:number=0;
  ngOnInit(){
    this.ProductosService.getproductos().subscribe(res =>{
      this.datos = res;
      this.numeroProductos = this.datos.length
    });
  }

}
