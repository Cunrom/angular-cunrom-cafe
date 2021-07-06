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
  @ViewChild('quantity') quantity: ElementRef;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  onDetailsClick() {
    this.orderService.optionDetails.emit(this.option);
  }
  onAddToCart() {
    if (this.quantity.nativeElement.value <= 0) {
      alert("Please enter a quantity above 0!")
    } else if (this.quantity.nativeElement.value > 0) {
      this.orderService.cart.push(new cartItem(this.option.name, this.option.price, this.quantity.nativeElement.value))
    }
  }
}
