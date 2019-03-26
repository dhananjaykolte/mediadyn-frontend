import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductHome2Component } from './product-home2/product-home2.component';
import { ProductHome3Component } from './product-home3/product-home3.component';

const routes: Routes = [
  // { path: '', component: ProductHomeComponent},
  { path: 'addProduct', component: AddProductComponent },
  { path: 'home1', component: ProductHomeComponent},
  { path: 'home2', component: ProductHome2Component},
  { path: 'home3', component: ProductHome3Component},
  { path: 'new', component: ProductNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
