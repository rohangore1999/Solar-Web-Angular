import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Mycomponents/product/product.component';
import { BannersComponent } from './Mycomponents/banners/banners.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ViewproductComponent } from './Mycomponents/viewproduct/viewproduct.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MysheetComponent } from './Mycomponents/mysheet/mysheet.component';
import { HttpClientModule } from '@angular/common/http'
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MoreAboutSolarComponent } from './Mycomponents/more-about-solar/more-about-solar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BannersComponent,
    AboutComponent,
    NavbarComponent,
    ViewproductComponent,
    MysheetComponent,
    MoreAboutSolarComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
