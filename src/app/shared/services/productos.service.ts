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

  postproductos(data:any){
    return this.http.post(this.BBDD,data);
  }


    }



