import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public pageTitle = 'Product List';
  public listFilter: string;
  public errorMessage: string;
  public products: ProductModel[];

  constructor(private _prdService: ProductService,
    private route: ActivatedRoute ) {
    this.listFilter = '';
  }

  ngOnInit() {
    this._prdService.retrieveProductList()
    .subscribe(products => this.products = products.response,
      error => this.errorMessage = <any>error);
  }

}
