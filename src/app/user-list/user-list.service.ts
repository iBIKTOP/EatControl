import { Injectable } from "@angular/core";
import { FoodService } from "../food.service";

class UserFood {
  id: number;
  name: string;
  weight: number;
  calorie: number;
  totalWeight: number;
  totalCalorie: number;
  constructor(
    id: number,
    name: string,
    weight: number,
    calorie: number,
    totalWeight: number,
    totalCalorie: number
  ) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.calorie = calorie;
    this.totalWeight = totalWeight;
    this.totalCalorie = totalCalorie;
  }
}

@Injectable({
  providedIn: "root"
})
export class UserListService {
  userList: UserFood[];
  id: number;
  name: string;
  weight: number;
  calorie: number;
  totalWeight: number;
  totalCalorie: number;
  constructor(private foodService: FoodService) {}

  //Действия с local storage
  connectToLS() {
    if (JSON.parse(localStorage.getItem("FoodUserList")) === null) {
      this.saveToLS();
    }
    this.userList = JSON.parse(localStorage.getItem("FoodUserList"));
  }
  saveToLS() {
    localStorage.setItem("FoodUserList", JSON.stringify(this.userList));
  }

  //Действия с листом пользователя
  getUserList() {
    return this.userList;
  }
  getUserFoodId(index) {
    return this.userList[index].id;
  }
  addUserList(thisFood, totalWeight) {
    // console.log(index);
    this.id = thisFood.id;
    this.name = thisFood.name;
    this.weight = thisFood.weight;
    this.calorie = thisFood.calorie;
    this.totalWeight = totalWeight;
    this.totalCalorie = (totalWeight * this.calorie) / this.weight;
    this.userList.push(
      new UserFood(
        this.id,
        this.name,
        this.weight,
        this.calorie,
        this.totalWeight,
        this.totalCalorie
      )
    );
    this.saveToLS();
  }
  getDeleteFood(i) {
    this.userList.splice(i, 1);
    this.saveToLS();
  }
  getTotalCalorie() {
    let total = 0;
    for (let i = 0; i < this.userList.length; i++) {
      total += +this.userList[i].calorie;
      console.log(total);
    }
    return total;
  }
  getSaveUserFood(i, id, name, weight, foodWeight, calorie) {
    this.userList[i].id = id;
    this.userList[i].name = name;
    this.userList[i].weight = weight;
    this.userList[i].totalWeight = foodWeight;
    this.userList[i].totalCalorie = (foodWeight * calorie) / weight;
    this.saveToLS();
  }
  filterForIndex(index) {
    return this.userList[index];
  }
}
