import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from '../../shared/food.model';
import { OrderService } from '../../shared/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }
  option: Food;
  descClicked: boolean;
  subscription: Subscription;
  ngOnInit(): void {
    this.descClicked = false;
    this.subscription = this.orderService.optionDetails.subscribe( (optionData: Food) => {
      if (optionData === this.option) {
        this.descClicked = !this.descClicked;
      } else if (optionData != this.option) {
        this.descClicked = true;
      }
      this.option = optionData;
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
