import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList :any;


  constructor(private product :ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.product.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })
  }
  addtocart(product:any){
   this.cartService.addtoCart(product);
  }

}
