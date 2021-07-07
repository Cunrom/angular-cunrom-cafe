import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/food.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css'],
})
export class OrderMenuComponent implements OnInit {
  foodOptions: Food[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.foodOptions = this.orderService.foodOptions;
  }

}
