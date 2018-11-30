import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../shared/service/http-request.service';
import { CONFIG } from '../config';
import { Observable } from 'rxjs/Observable';
import { ProductListRespModel } from '../models/product.model';

@Injectable()
export class ProductService {
  public productListInfo: ProductListRespModel;

  set productList(data: ProductListRespModel) {
    this.productListInfo = data;
  }

  get productList(): ProductListRespModel {
    return this.productListInfo;
  }
  constructor(public httpREqServ: HttpRequestService) { }

  retrieveProductList(): Observable<ProductListRespModel> {
    const fetchURL = CONFIG.WSURL.fetchProductRecordURL;
    return this.httpREqServ.getRequest(fetchURL)
      .map(data => {
        return this.productListInfo = data;
      });
  }

}
