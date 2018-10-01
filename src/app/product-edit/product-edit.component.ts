import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../services';
import { Product } from '../models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: string;
  product: Product = new Product();

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .subscribe( params => {
        this.productId = params.get('id');
    });
  }

  ngOnInit() {
    this.productService.getProduct(this.productId)
      .subscribe( product => {
        this.product = product;
    });
  }

  onSubmit(): void {
    this.productService.updateProduct(this.product)
      .subscribe( _result => {
        console.log(_result);
    });
  }

  onDelete(): void {
    this.productService.removeProduct(this.product.id)
      .subscribe( _result => {});
  }

}
