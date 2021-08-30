import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Mycomponents/product/product.component'
import { BannersComponent } from './Mycomponents/banners/banners.component'
import { AboutComponent } from './Mycomponents/about/about.component'
import { ViewproductComponent } from './Mycomponents/viewproduct/viewproduct.component';
import { AddtoCartComponent } from './Mycomponents/addto-cart/addto-cart.component';
import { PrivacyPolicyComponent } from './Mycomponents/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './Mycomponents/terms-conditions/terms-conditions.component';
import { ShippingpolicyComponent } from './Mycomponents/shippingpolicy/shippingpolicy.component';
import { RefundsCancellationsComponent } from './Mycomponents/refunds-cancellations/refunds-cancellations.component';
import { PricingPolicyComponent } from './Mycomponents/pricing-policy/pricing-policy.component';
import { WarrantyPolicyComponent } from './Mycomponents/warranty-policy/warranty-policy.component';


const routes: Routes = [
  { path: '', component: BannersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/viewproduct/:id', component: ViewproductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addtocart', component: AddtoCartComponent},
  { path: 'privacypolicy', component: PrivacyPolicyComponent},
  { path: 'termscondition', component: TermsConditionsComponent},
  { path: 'shippingpolicy', component: ShippingpolicyComponent},
  { path: 'refundcancellation', component: RefundsCancellationsComponent},
  { path: 'pricingpolicy', component: PricingPolicyComponent},
  { path: 'warrantypolicy', component: WarrantyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
