import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { cartItem } from '../cartitem.model';
import { Food } from '../food.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-options',
  templateUrl: './order-options.component.html',
  styleUrls: ['./order-options.component.css']
})
export class OrderOptionsComponent implements OnInit {
  @Input() option: Food;
  quantity: number = 1;
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
  }
  onDetailsClick() {
    this.orderService.optionDetails.emit(this.option);
  }
  onAddToCart() {
    if (this.quantity > 0) {
      this.orderService.cart.push(new cartItem(this.option.name, this.option.price, this.quantity))
      this.orderService.totalItem += this.quantity;
      this.orderService.totalItemEmitter.emit(this.orderService.totalItem);
    }
  }
  quantityCheck() {
    if (this.quantity <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
