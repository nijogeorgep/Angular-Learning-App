import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductFilterPipe } from './pipe/product-filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductFilterPipe],
  providers: [ProductService]
})
export class ProductsModule { }
