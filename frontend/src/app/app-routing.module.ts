import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'landing', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'landing',component:LandingPageComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'footer',component:FooterComponent},
  // {path:'orders',component:OrdersComponent, canActivate: [AuthGuard]},
  {path:'prodDetails', component: ProductViewComponent},
  {path:'cart', component: ShoppingCartComponent},
  // {path:'checkout', component:CheckoutComponent,canActivate: [AuthGuard]},
  // {path:'userprofile', component: UserprofileComponent, canActivate: [AuthGuard]},
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo: 'landing', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
