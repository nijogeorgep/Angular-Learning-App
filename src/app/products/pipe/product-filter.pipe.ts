import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: ProductModel[], key: string): ProductModel[] {
    key = key ? key.toLocaleLowerCase() : null;
        return key ? value.filter((product: ProductModel) =>
            product.productName.toLocaleLowerCase().indexOf(key) !== -1) : value;
  }

}
