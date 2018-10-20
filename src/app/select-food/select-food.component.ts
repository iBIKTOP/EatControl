import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";
import { ActivatedRoute } from "@angular/router";
import { UserListService } from "../user-list/user-list.service";
import { Food } from "../Food";

@Component({
  selector: "app-select-food",
  templateUrl: "./select-food.component.html",
  styleUrls: ["./select-food.component.css"]
})
export class SelectFoodComponent implements OnInit {
  index: number;
  // name: string;
  // weight: number;
  foodWeight: number;
  // calorie: number;
  thisFood: Food;
  constructor(
    private foodService: FoodService,
    private userListService: UserListService,
    private route: ActivatedRoute
  ) {}

  showAddUserList() {
    this.userListService.addUserList(this.thisFood, this.foodWeight);
  }

  ngOnInit() {
    this.route.params.subscribe(({ index }) => {
      // console.log(this.foodService.editFood(index));
      this.index = index;
      // this.name = this.foodService.editFood(index).name;
      // this.weight = this.foodService.editFood(index).weight;
      // this.calorie = this.foodService.editFood(index).calorie;
      this.thisFood = this.foodService.getFood(index);
    });
  }
}
