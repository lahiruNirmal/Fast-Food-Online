import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FoodModel } from '../../food-model';
import { FoodService } from '../../food-service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {
  @Output() menuList: FoodModel[] = new Array<FoodModel>();
  private foodMenuList = [
    new FoodModel('Big Belly Burger Meal', 'Burger meal with extra french fries and preferred beverage.', 'burger-1', '999'),
    new FoodModel('Fast Belly Burger', 'Delicious burger with onions, garlic and cheese and chicken.', 'burger-2', '460'),
    new FoodModel('Big Belly Submarine', 'Foot long submarine with customer\'s preferences.', 'sub-1', '520'),
    new FoodModel('Big Belly Special Submarine', 'Foot long submarine with Big Belly Burger\'s secret recipe.', 'sub-2', '850'),
    new FoodModel('Big Belly Spagetti', 'Spagetti with meat balls.', 'spagetti', '740'),
    new FoodModel('Big Belly Cheese Kottu', 'Cheese kottu made with Big Belly Burger\'s secret recipe.', 'kottu', '490'),
    new FoodModel('Big Belly Chicken Burrito', 'Chicken burrito made with Big Belly Burger\'s secret recipe.', 'burrito', '890')
  ];
  private subscription: Subscription;
  //private authSubscription

  //---------------Injecting the service------------------
  constructor(private foodService: FoodService, private authService: AuthService) { }
  //------------------------------------------------------

  ngOnInit() {
    //  this.setFoodItemsList(this.foodMenuList);
    //  console.log(this.foodMenuList);
    // this.authSubscription = this.authService.varIsAuthenticated.subscribe(
    //   next => {
    //     if (next == true){
          this.getFoodItemsList();
          console.log(this.authService.varIsAuthenticated.next);
    //     }
    //   }
    // );
     
  }

  //----------Removes memory leaks-------------------
  ngOnDestroy() {
    this.subscription.unsubscribe();
    //this.authSubscription.unsubscribe();
  }
  //----------------------------------------------------

  setFoodItemsList(foodMenuList: FoodModel[]) {
    this.foodService.saveFoodItemsList(foodMenuList).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFoodItemsList() {
    this.subscription = this.foodService.getFoodItemsList().subscribe(
      (itemList: any[]) => {
        // for (const item of itemList[0]) {
        //   this.menuList.push(item);
        // }
        this.menuList = itemList;
      },
      (error) => console.log(error)
    );
  }

}