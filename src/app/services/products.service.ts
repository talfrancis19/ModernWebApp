import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl: string ="https://localhost:7139";
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + '/api/Products')

  }
  addProduct(newProduct: Product): Observable<Product>{
    newProduct.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/api/Products',newProduct)
  }
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(this.baseApiUrl + '/api/Products/' + id);
  }
  updateProduct(id: string, updateProductRequest: Product): Observable<Product>{
    return this.http.put<Product>(this.baseApiUrl + '/api/Products/' + id, updateProductRequest);
  }
  deleteProduct(id: string): Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + '/api/Products/' + id);
  }
}
