import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem :number = 0;

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
     this.totalItem = res.length;
    })
  }
  search(event:any){
    var searchTerm=event.target.value
    this.productService.search.next(searchTerm)

  }

}
