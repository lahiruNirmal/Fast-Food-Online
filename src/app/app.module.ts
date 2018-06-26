import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FoodService } from './food-service';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app-routing-module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { FoodItemComponent } from './menu/menu-list/food-item/food-item.component';
import { FoodItemDetailsComponent } from './menu/menu-list/food-item-details/food-item-details.component';
import { ShoppingItemComponent } from './shopping-cart/shopping-item/shopping-item.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/authGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuListComponent,
    FoodItemComponent,
    FoodItemDetailsComponent,
    PaymentComponent,
    ShoppingCartComponent,
    MenuComponent,
    ShoppingItemComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FoodService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
