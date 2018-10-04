import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../services';
import { Product } from '../models';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product: Product = new Product;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.addProduct(this.product)
      .subscribe( _result => {
        this.product = new Product;
        this.router.navigateByUrl('/products');
    });
  }

}
