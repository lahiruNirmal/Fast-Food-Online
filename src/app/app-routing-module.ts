import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';
import { FoodItemDetailsComponent } from './menu/menu-list/food-item-details/food-item-details.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/authGuard.service';

const appRoutes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'home', component: MenuComponent, canActivate: [AuthGuardService], children: [
        {path: ':id', component: FoodItemDetailsComponent}
    ]},
    {path: 'shoppingCart', component: ShoppingCartComponent, canActivate: [AuthGuardService]},
    {path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}