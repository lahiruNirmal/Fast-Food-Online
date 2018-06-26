import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodModel } from '../../food-model';
import { FoodService } from '../../food-service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() foodItem: FoodModel;
  @Input() index: number;
  @Output() reload = new EventEmitter<{index: number}>();
  private imageAddress: string;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
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
  }

  removeItem(){
    this.foodService.removeFromCart(this.index);
    this.reload.emit({index: this.index});
  }

}
