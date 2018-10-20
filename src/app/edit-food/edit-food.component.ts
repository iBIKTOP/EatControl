import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../food.service";
import { Food } from "../Food";

@Component({
  selector: "app-edit-food",
  templateUrl: "./edit-food.component.html",
  styleUrls: ["./edit-food.component.css"]
})
export class EditFoodComponent implements OnInit {
  someFood: Food;
  index: number;
  inputFood: string;
  inputWeight: number;
  inputCalorie: number;
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}
  showSaveFood(name: string, weight: number, calorie: number) {
    this.foodService.getSaveFood(this.index, name, weight, calorie);
  }
  ngOnInit() {
    this.route.params.subscribe(({ index }) => {
      this.index = index;
      this.someFood = this.foodService.getFood(index);
      console.log(this.someFood.name);
      this.inputFood = this.someFood.name;
      this.inputWeight = this.someFood.weight;
      this.inputCalorie = this.someFood.calorie;
    });
  }
}
