import { Injectable, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { FoodModel } from "./food-model";
import 'rxjs/Rx';
import { Subject } from "rxjs/Rx";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class FoodService {
    menuList: FoodModel [] = new Array<FoodModel>();
    shoppingCart: FoodModel [] = new Array <FoodModel>();
    shoppingSubject: Subject<FoodModel[]> = new Subject<FoodModel[]> ();

    //Injecting the Http service provided by angular.
    constructor(private http: Http, private authService: AuthService){}

    saveFoodItemsList (foodItemsList: FoodModel []) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://fast-food-online.firebaseio.com/data.json', foodItemsList, {headers: headers});
    }

    getFoodItemsList () {
        const token = this.authService.getToken();

        return this.http.get('https://fast-food-online.firebaseio.com/data.json?auth=' + token).map(
            (response: Response) => {
                for (const item of Array.of(response.json()['-LCPX9F_y_1qkpEW5WVh'])[0]) {
                    this.menuList.push(item);
                }
                return this.menuList;
            }
        );
    }

    getShoppingItemList () {
        // this.shoppingSubject.next(this.shoppingCart);
        // return this.shoppingSubject;
        return this.shoppingCart;
    }

    getFoodItemById (index: number): FoodModel {
        return this.menuList[index];
      }

    addToShoppingCart (index: number) {
        this.shoppingCart.push(this.menuList[index]);
        console.log("Added");
    }

    removeFromCart(index: number) {
        this.shoppingCart.splice(index, 1);
        console.log(this.shoppingCart);
      }

}