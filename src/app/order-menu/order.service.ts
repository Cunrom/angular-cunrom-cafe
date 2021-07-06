import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { cartItem } from "./cartitem.model";
import { Food } from "./food.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    optionDetails = new EventEmitter<Food>();
    foodOptions: Food[] = [
        new Food("Spaghetti Meatball", 10, "assets/images/spaghettimeatball.jpg", 400, "An Italian-American dish consisting of spaghetti, tomato sauce and meatballs", 1),
        new Food ("Fried Egg", 4, "assets/images/sunnysideup.jpg", 97, "Egg that is fried sunny-side-up.", 1),
    ];
    cart: cartItem[] = [];
    totalItem: number = 0;
    totalItemEmitter = new EventEmitter<number>();
}