import { Component, OnInit } from "@angular/core";
import { UserListService } from "./user-list.service";
import { UserFood } from "../UserFood";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  title = "Счетчик калорий";
  total: number;
  userList: UserFood[];
  constructor(private userListService: UserListService) {}

  showUserList() {
    this.userList = this.userListService.getUserList();
    if (this.userList !== undefined) {
      this.showTotalCalorie();
    }
  }
  showDeleteFood(i) {
    this.userListService.getDeleteFood(i);
    this.showTotalCalorie();
  }
  showTotalCalorie() {
    this.total = this.userListService.getTotalCalorie();
  }

  ngOnInit() {
    this.userListService.connectToLS();
    this.showUserList();
  }
}
