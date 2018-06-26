import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodModel } from '../../../food-model';
import { FoodService } from '../../../food-service';

@Component({
  selector: 'app-food-item-details',
  templateUrl: './food-item-details.component.html',
  styleUrls: ['./food-item-details.component.css']
})
export class FoodItemDetailsComponent implements OnInit {
  foodItem: FoodModel = new FoodModel(null, null, null, null);
  id: number;
  imageAddress: string;
  itemStatus = 'Add to Cart';

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.foodItem = this.foodService.getFoodItemById(this.id);

        switch (this.foodItem.imageUrl) {
          case 'burger-1': {
            this.imageAddress = '../../assets/images/menu-list/burger-1.jpg';
            break;
          }
          case 'burger-2': {
            this.imageAddress = '../../assets/images/menu-list/burger-2.png';
            break;
          }
          case 'sub-1': {
            this.imageAddress = '../../assets/images/menu-list/sub-1.png';
            break;
          }
          case 'sub-2': {
            this.imageAddress = '../../assets/images/menu-list/sub-2.png';
            break;
          }
          case 'spagetti': {
            this.imageAddress = '../../assets/images/menu-list/spagetti.png';
            break;
          }
          case 'kottu': {
            this.imageAddress = '../../assets/images/menu-list/kottu.jpg';
            break;
          }
          case 'burrito': {
            this.imageAddress = '../../assets/images/menu-list/burrito.png';
            break;
          }
        }

        if (this.foodService.shoppingCart.find(o => o.name === this.foodItem.name)){
          this.itemStatus = 'Remove from Cart';
        }else{
          this.itemStatus = 'Add to Cart';
        }
      });
  }

  updateCart() {
    if (this.itemStatus === 'Remove from Cart') {
      this.foodService.removeFromCart(this.id);
      this.itemStatus = 'Add to Cart';
    } else {
      this.foodService.addToShoppingCart(this.id);
      this.itemStatus = 'Remove from Cart';
    }
  }

}
