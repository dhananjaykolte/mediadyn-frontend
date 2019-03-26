import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialModule } from './material.module';
import { Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductHome2Component } from './product-home2/product-home2.component';
import { ProductHome3Component } from './product-home3/product-home3.component';

const routes: Routes = [
  { path: 'addProduct', component: AddProductComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductHomeComponent,
    ProductNewComponent,
    ProductHome2Component,
    ProductHome3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
