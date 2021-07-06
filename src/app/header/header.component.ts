import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  collapsed: boolean = true;
  windowCartResized: boolean = false;
  cartCollapsed: boolean = false;
  ngOnInit(): void {
  }
  onViewCartClick() {
    this.router.navigate(["/shopping-cart"])
  }
  onCollapseClick() {
    this.collapsed = !this.collapsed;
    this.cartCollapsed = !this.cartCollapsed;
  }
  onWindowResize() {
    this.collapsed = true;
    this.windowCartResized = true;
  }
}
