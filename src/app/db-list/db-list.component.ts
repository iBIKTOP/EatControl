import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "app-db-list",
  templateUrl: "./db-list.component.html",
  styleUrls: ["./db-list.component.css"]
})
export class DbListComponent implements OnInit {
  foods: any[];
  constructor(private foodService: FoodService) {}
  showDBList() {
    this.foods = this.foodService.getFoods();
  }
  showDeleteFood(i: number) {
    this.foodService.getDeleteFood(i);
  }
  onSearch(event) {
    console.log(event.target.value);
    this.foods = this.foodService.onSearch(event.target.value);
  }
  ngOnInit() {
    this.foodService.connectToLS();
    this.showDBList();
  }
}
