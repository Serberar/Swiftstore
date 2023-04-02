import { Component } from '@angular/core';
import { ProductosService } from './../../shared/services/productos.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  constructor(private productosService: ProductosService) { }
  
  objetoId: any = {
    id: null,
    name: "",
    price: null,
    description: "",
    image: "",
    stars: null
  };

  datos: any;
  id: any;
  name: string = "";
  price: any;
  description: any;
  image: any;
  stars: any;

  buscarProducto() {
    this.productosService.getidproductos(this.id).subscribe(
      (data: any) => {
        this.objetoId = data;
        this.name = this.objetoId.name;
        this.price = this.objetoId.price;
        this.description = this.objetoId.description;
        this.image = this.objetoId.image;
        this.stars = this.objetoId.stars;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

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
    this.id =""
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

  editarProducto() {
    const productoModificado = {
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image,
      stars: this.stars
    };
  
    this.productosService.modificarproducto(this.id, productoModificado).subscribe(
      (response) => {
        alert('Los datos se han modificado correctamente.');
        this.resetForm();
      },
      (error) => {
        console.log(error);
        alert('Ha ocurrido un error al modificar los datos. Inténtalo de nuevo más tarde.');
      }
    );
  }
}
