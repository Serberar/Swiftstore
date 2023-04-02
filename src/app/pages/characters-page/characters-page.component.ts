import { ProductosService } from './../../shared/services/productos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent {

  constructor(private ProductosService: ProductosService) { }

  datos: any;
  numeroProductos: number = 0;
  buscador: any;
  datosFiltrados: any[] = []
  datosOriginales: any;

  ngOnInit() {
    this.ProductosService.getproductos().subscribe(res => {
      this.datos = res;
      this.datosOriginales = res;
      this.numeroProductos = this.datos.length
    });
  }

  getStarRating(stars: number): string {
    let starRating = '';
    for (let i = 0; i < stars; i++) {
      starRating += '★';
    }
    return starRating;
  }

  filtername() {
    if (this.buscador === '') {
      this.datos = this.datosOriginales;
    } else {
      this.datos = this.datosOriginales.filter((producto: any) => {
        return producto.name.toLowerCase().includes(this.buscador.toLowerCase());
      });
    }
    this.numeroProductos = this.datos.length;
  }

  deleteproducto(producto: any) {
    this.ProductosService.deleteproductos(producto).subscribe(
      () => alert('Artículo borrado'),
      error => console.error(error)
    );
  }

}

