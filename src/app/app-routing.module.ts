import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DbListComponent } from "./db-list/db-list.component";

import { UserListComponent } from "./user-list/user-list.component";
import { AddFoodComponent } from "./add-food/add-food.component";
import { EditFoodComponent } from "./edit-food/edit-food.component";
import { SelectFoodComponent } from "./select-food/select-food.component";
import { SelectUserFoodComponent } from "./select-user-food/select-user-food.component";

const routes: Routes = [
  { path: "", redirectTo: "/userList", pathMatch: "full" },
  { path: "userList", component: UserListComponent },
  { path: "dbList", component: DbListComponent },
  { path: "addFood", component: AddFoodComponent },
  { path: "editFood/:index", component: EditFoodComponent },
  { path: "selectFood/:index", component: SelectFoodComponent },
  { path: "selectUserFood/:index", component: SelectUserFoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
