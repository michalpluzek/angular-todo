import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todolist.compponent";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoComponent, TodoListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
