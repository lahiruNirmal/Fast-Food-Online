import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { FoodModel } from '../food-model';
import { FoodService } from '../food-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Output() shoppingList: FoodModel[] = new Array<FoodModel>();
  private subscription: Subscription;
  private totalPrice: number = 0;

  //---------------Injecting the service------------------
  constructor(private foodService: FoodService, private router: Router) { }
  //------------------------------------------------------

  ngOnInit() {
    // this.foodService.getShoppingItemList().subscribe(
    //   (itemList: any[]) => {
    //     this.shoppingList = Array.from(itemList);
    //     // for (const item of this.shoppingList) {
    //     //   console.log(item);
    //     // }
    //     console.log(this.shoppingList);
    //   }
    // );
    this.getShoppingItems();
  }

  getShoppingItems(){
    this.shoppingList = this.foodService.getShoppingItemList();
  }

  reloadShoppingItems({index: number}){
    this.foodService.getShoppingItemList();
  }

  checkOutShoppingCart(){
    for(const item of this.foodService.shoppingCart){
      this.totalPrice += +item.price;
    }
    this.router.navigate(['/payment']);
  }

}
