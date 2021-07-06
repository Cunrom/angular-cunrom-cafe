import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/order-menu/cartitem.model';
import { OrderService } from 'src/app/order-menu/order.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() cartItem: cartItem;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
}
