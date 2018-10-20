import { Injectable } from "@angular/core";

class Food {
  id: number;
  name: string;
  weight: number;
  calorie: number;

  constructor(name: string, weight: number, calorie: number) {
    this.id = Date.now();
    this.name = name.trim();
    this.weight = weight;
    this.calorie = calorie;
  }
}

@Injectable({
  providedIn: "root"
})
export class FoodService {
  foods: Food[];
  constructor() {}

  //Действия с local storage
  connectToLS() {
    if (JSON.parse(localStorage.getItem("FoodDataBase")) === null) {
      this.saveToLS();
    }
    this.foods = JSON.parse(localStorage.getItem("FoodDataBase"));
  }
  saveToLS() {
    localStorage.setItem("FoodDataBase", JSON.stringify(this.foods));
  }

  getFoods() {
    return this.foods;
  }
  getAddFood(name: string, weight: number, calorie: number) {
    console.log(name, weight, calorie);
    if (
      name == null ||
      name.trim() === "" ||
      calorie == null ||
      weight == null
    ) {
      return;
    } else {
      this.foods.push(new Food(name, weight, calorie));
    }
    this.saveToLS();
  }
  getSaveFood(index, name, weight, calorie) {
    if (
      name == null ||
      name.trim() === "" ||
      calorie == null ||
      weight == null
    ) {
      return;
    } else {
      this.foods[index].name = name.trim();
      this.foods[index].weight = weight;
      this.foods[index].calorie = calorie;
    }
    this.saveToLS();
  }
  getFood(index) {
    return this.foods[index];
  }
  getDeleteFood(index: number) {
    this.foods.splice(index, 1);
    this.saveToLS();
  }
  filterOfId(id) {
    return this.foods.filter(food => food.id == id);
  }
  onSearch(value) {
    return this.foods.filter(
      food => food.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
