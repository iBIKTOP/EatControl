import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "app-food",
  templateUrl: "./add-food.component.html",
  styleUrls: ["./add-food.component.css"]
})
export class AddFoodComponent implements OnInit {
  inputFood: string;
  inputCalorie: string;
  inputWeight: string;
  constructor(private foodService: FoodService) {}
  showAddFood(name: string, weight: number, calorie: number) {
    this.foodService.getAddFood(name, weight, calorie);
  }
  ngOnInit() {}
}
