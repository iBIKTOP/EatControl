import { Component, OnInit } from "@angular/core";
import { UserListService } from "../user-list/user-list.service";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../food.service";
import { UserFood } from "../UserFood";

@Component({
  selector: "app-select-user-food",
  templateUrl: "./select-user-food.component.html",
  styleUrls: ["./select-user-food.component.css"]
})
export class SelectUserFoodComponent implements OnInit {
  index: number;
  inputWeight: number;
  thisFood: UserFood;
  constructor(
    private userListService: UserListService,
    private route: ActivatedRoute
  ) {}

  showAddUserList() {
    this.userListService.addUserList(this.index, this.inputWeight);
  }
  showSaveUserFood(inputWeight) {
    this.userListService.getSaveUserFood(
      this.index,
      this.thisFood.id,
      this.thisFood.name,
      this.thisFood.weight,
      inputWeight,
      this.thisFood.calorie
    );
  }

  ngOnInit() {
    this.route.params.subscribe(({ index }) => {
      // console.log("получил индекс = " + index);
      this.index = index;
      // let id = this.userListService.getUserFoodId(index);
      // console.log("userListService вернул мне id = " + id);
      this.thisFood = this.userListService.filterForIndex(index);
      // console.log(
      // "foodService.filterOfId вернул мне = " + this.thisFood[0].name
      // );
    });
  }
}
