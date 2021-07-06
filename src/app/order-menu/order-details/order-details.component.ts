import { Component, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }
  option: Food;
  descClicked: boolean;
  ngOnInit(): void {
    this.descClicked = false;
    this.orderService.optionDetails.subscribe( (optionData: Food) => {
      this.descClicked = true;
      this.option = optionData;
    })

  }
  ngOnDestroy() {

  }
}
