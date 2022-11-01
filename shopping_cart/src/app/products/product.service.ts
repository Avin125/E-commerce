import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  search= new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //View all product api
  viewAllproduct(){
    return this.http.get('http://localhost:3000/products')
    }
    //view product
  viewProduct(productId:any){
   return this.http.get('http://localhost:3000/products/'+productId)
  }
  
  //Add New Product
  addProduct(productBody:any){

    return this.http.post('http://localhost:3000/products/',productBody)
  }

  //Update Product
  updateProduct(productId:any,productBody:any){
    return this.http.put('http://localhost:3000/products/'+productId,productBody)

  }

  //Delete Product
  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  //getproduct
  getProduct(){
    return this.http.get('http://localhost:3000/products/')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
