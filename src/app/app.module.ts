import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { InfoComponent } from './home-page/info/info.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderOptionsComponent } from './order-menu/order-options/order-options.component';
import { OrderDetailsComponent } from './order-menu/order-details/order-details.component';
import { CheckoutMenuComponent } from './checkout-menu/checkout-menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';

const appRoutes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "order", component: OrderMenuComponent},
  {path: "shopping-cart", component: ShoppingCartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutUsComponent,
    InfoComponent,
    OrderMenuComponent,
    OrderOptionsComponent,
    OrderDetailsComponent,
    CheckoutMenuComponent,
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
