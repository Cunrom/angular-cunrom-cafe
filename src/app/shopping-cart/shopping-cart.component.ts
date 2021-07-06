import { Component, OnInit } from '@angular/core';
import { cartItem } from '../order-menu/cartitem.model';
import { OrderService } from '../order-menu/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private orderService: OrderService) { }
  cartItems: cartItem[];
  ngOnInit(): void {
    this.cartItems = this.orderService.cart;
  }
}
