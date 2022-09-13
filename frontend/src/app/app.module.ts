import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
// import { IonicModule } from '@ionic/angular';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/authconfig.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    NavBarComponent,
    FooterComponent,
    NotfoundComponent,
    ProductViewComponent,
    OrdersComponent,
    ProductsComponent,
    ShoppingCartComponent,
    UserprofileComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IonicModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    FormsModule, 
    HttpClientModule,
    // NgxScrollTopModule,
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.wanderingCubes,
    //   backdropBackgroundColour: 'rgba(0,0,0,0.5)',
    //   backdropBorderRadius: '4px',
    //   primaryColour: '#ffffff',
    //   secondaryColour: '#ffffff',
    //   tertiaryColour: '#ffffff',
    //   fullScreenBackdrop: false,
    // }),

  ],
  providers: [
 {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
 }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
