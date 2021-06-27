import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Mycomponents/product/product.component'
import { BannersComponent } from './Mycomponents/banners/banners.component'
import { AboutComponent } from './Mycomponents/about/about.component'


const routes: Routes = [
  { path: '', component: BannersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
