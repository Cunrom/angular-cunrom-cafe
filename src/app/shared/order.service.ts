import { isTemplateDiagnostic } from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
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
        new Food("Spaghetti Meatball", 10, "assets/images/spaghettimeatball.jpg", 400, "An Italian-American dish consisting of spaghetti, tomato sauce and meatballs", 7),
        new Food("Fried Egg", 4, "assets/images/sunnysideup.jpg", 97, "Egg that is fried sunny-side-up", 5),
        new Food("Pho", 8, "assets/images/pho.jpg", 450, "A Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 15),
        new Food("Chicken Salad", 16, "assets/images/chicken-salad.jpg", 105, "Chicken salad is any salad with chicken as a main ingredient", 8),
        new Food("Hamburger", 5, "assets/images/hamburger.jpg", 270, "Hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef", 5)
    ];

    cartItemList: cartItem[] = [];
    totalItem: number = 0;
    totalCost: number = 0;
    itemCartCreated = new EventEmitter<cartItem[]>();
    totalItemEmitter = new EventEmitter<number>();

    updateCartItem(item: cartItem) {
        for (let i = 0; i < this.cartItemList.length; i++) {
            if (this.cartItemList[i].name === item.name) {
                this.cartItemList[i].quantity += item.quantity;
                this.itemCartCreated.emit(this.cartItemList);
                this.totalCost += (item.quantity * item.price);
                return this.cartItemList;
            }
        }
        this.cartItemList.push(item);
        this.itemCartCreated.emit(this.cartItemList);
        this.totalCost += (item.quantity * item.price);
    }
}