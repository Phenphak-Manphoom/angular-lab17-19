import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products :Product[];
  constructor() {
    this.products =[];
    this.products.push({
      name:'Apple',
      price:30
    });
    this.products.push({
      name:'Banana',
      price:25
    });
    this.products.push({
      name:'Orange',
      price:45
    });
   }

  ngOnInit(): void {
  }

  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
    }

}
