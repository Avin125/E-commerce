import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: any;
  categoryList: any;
  searchItem: any;
  

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.viewAllproduct()
      .subscribe((data) => {
        this.productList = data
        console.log(this.productList);

      })
    this.productService.search.subscribe((term) => {
      this.searchItem = term
    })
    this.productService.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

  }
  categorySearch(category: any) {
    this.categoryList = this.productList.filter((item: any) => {
      if (category == '' || category == item.categoryId) {
        return item
      }
    })
  }
  addtocart(product: any) {
    this.cartService.addtoCart(product);
  }


}
