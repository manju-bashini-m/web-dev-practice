import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'cardpay',
    component: OrderPayComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cardorder',
    component: OrderSuccessComponent,
    canActivate: [authGuard],
  },
  {
    path: 'order-page',
    component: OrderPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product-detail/:productid',
    component: ProductDetailComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
  },
];
