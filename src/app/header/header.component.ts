import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  collapsed: boolean = false;
  ngOnInit(): void {
  }
  onViewCartClick() {
    this.router.navigate(["/shopping-cart"])
  }
}
