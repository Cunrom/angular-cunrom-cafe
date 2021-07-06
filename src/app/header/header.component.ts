import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order-menu/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private orderService: OrderService) { }
  collapsed: boolean = true;
  totalItem: number = 0;
  ngOnInit(): void {
      this.orderService.totalItemEmitter.subscribe( (quantity: number) => {
        this.totalItem = quantity;
      })
  }
  onViewCartClick() {
    this.router.navigate(["/shopping-cart"])
  }
  hasItem() {
    if (this.orderService.cart.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
