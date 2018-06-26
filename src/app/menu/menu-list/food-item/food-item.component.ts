import { Component, OnInit, Input } from '@angular/core';
import { FoodModel } from '../../../food-model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: FoodModel;
  @Input() index: number;
  private imageAddress: string;

  constructor() { }

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

}
