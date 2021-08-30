import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Mycomponents/product/product.component';
import { BannersComponent } from './Mycomponents/banners/banners.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ViewproductComponent } from './Mycomponents/viewproduct/viewproduct.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MysheetComponent } from './Mycomponents/mysheet/mysheet.component';
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShippingAddressComponent } from './Mycomponents/shipping-address/shipping-address.component';
import { AddtoCartComponent } from './Mycomponents/addto-cart/addto-cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PayoptionComponent } from './Mycomponents/payoption/payoption.component';
import { PrivacyPolicyComponent } from './Mycomponents/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './Mycomponents/terms-conditions/terms-conditions.component';
import { RefundsCancellationsComponent } from './Mycomponents/refunds-cancellations/refunds-cancellations.component';
import { PricingPolicyComponent } from './Mycomponents/pricing-policy/pricing-policy.component';
import { ShippingpolicyComponent } from './Mycomponents/shippingpolicy/shippingpolicy.component';
import { WarrantyPolicyComponent } from './Mycomponents/warranty-policy/warranty-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BannersComponent,
    AboutComponent,
    NavbarComponent,
    ViewproductComponent,
    MysheetComponent,
    ShippingAddressComponent,
    AddtoCartComponent,
    FooterComponent,
    PayoptionComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    RefundsCancellationsComponent,
    PricingPolicyComponent,
    ShippingpolicyComponent,
    WarrantyPolicyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    GooglePayButtonModule,
    MatBottomSheetModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
