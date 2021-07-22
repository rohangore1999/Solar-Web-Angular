import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Mycomponents/product/product.component'
import { BannersComponent } from './Mycomponents/banners/banners.component'
import { AboutComponent } from './Mycomponents/about/about.component'
import { ViewproductComponent } from './Mycomponents/viewproduct/viewproduct.component';
import { MoreAboutSolarComponent } from './Mycomponents/more-about-solar/more-about-solar.component';
import { AddtoCartComponent } from './Mycomponents/addto-cart/addto-cart.component';


const routes: Routes = [
  { path: '', component: BannersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/viewproduct/:id', component: ViewproductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'more-about-solar', component: MoreAboutSolarComponent },
  { path: 'addtocart', component: AddtoCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
