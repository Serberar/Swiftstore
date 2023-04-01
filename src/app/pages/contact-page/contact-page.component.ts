import { Component } from '@angular/core';
import { ProductosService } from './../../shared/services/productos.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  name: string = "";
  price: any;
  description: any;
  image: any;
  stars: any;

  constructor(private productosService: ProductosService) { }

  onSubmit() {
    const productData = {
      name: this.name,
      price: this.price,
      description: this.description,
      stars: this.stars,
      image: this.image
    };

    this.productosService.postproductos(productData).subscribe(
      res => {
        alert('Los datos se han agregado correctamente.');
        this.resetForm();
      },
      err => {
        alert('Ha ocurrido un error al agregar los datos. Inténtalo de nuevo más tarde.');
      }
    );
  }

  resetForm() {
    this.name = "";
    this.price = "";
    this.description = "";
    this.image = "";
    this.stars = "";
  }

  getStarRating(stars: number): string {
    let starRating = '';
    for (let i = 0; i < stars; i++) {
      starRating += '★';
    }
    return starRating;
  }



}
