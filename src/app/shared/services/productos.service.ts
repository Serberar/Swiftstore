import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  BBDD= "http://localhost:3000/products";

  getproductos(){
    return this.http.get(this.BBDD);
  }

  getidproductos(id: string) {
    return this.http.get(`${this.BBDD}/${id}`);
  }

  postproductos(data:any){
    return this.http.post(this.BBDD,data);
  }

  deleteproductos(producto: any) {
    return this.http.delete(`${this.BBDD}/${producto.id}`);
  }

   modificarproducto(id: string, data: any) {
    return this.http.put(`${this.BBDD}/${id}`, data);
  }

    }


