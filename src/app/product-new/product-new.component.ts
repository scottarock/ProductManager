import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services';
import { Product } from '../models';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product: Product = new Product;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.product);
    this.productService.addProduct(this.product);
    this.product = new Product;
  }

}
