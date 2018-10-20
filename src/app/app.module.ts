import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { HeaderModule } from "./modules/header/header.module";
import { DbListComponent } from "./db-list/db-list.component";
import { AddFoodComponent } from "./add-food/add-food.component";
import { EditFoodComponent } from "./edit-food/edit-food.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { SelectFoodComponent } from "./select-food/select-food.component";
import { SelectUserFoodComponent } from './select-user-food/select-user-food.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DbListComponent,
    AddFoodComponent,
    EditFoodComponent,
    SelectFoodComponent,
    SelectUserFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
