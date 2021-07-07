import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/shared/cartitem.model';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() cartItem: cartItem;
  totalCost: number;

  constructor() { }

  ngOnInit(): void {
      this.totalCost = this.cartItem.price * this.cartItem.quantity;
  }
}
