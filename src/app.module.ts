import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
