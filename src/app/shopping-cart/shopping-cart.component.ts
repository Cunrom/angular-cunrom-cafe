import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cartItem } from '../shared/cartitem.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService) { }
  cartItems: cartItem[];
  totalCost: number;
  subscription: Subscription;
  ngOnInit() {
    this.cartItems = this.orderService.cartItemList;
    this.totalCost = this.orderService.totalCost;
    this.subscription = this.orderService.itemCartCreated.subscribe((cartItemList: cartItem[]) => {
        this.cartItems = cartItemList;
        this.totalCost = this.orderService.totalCost;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}