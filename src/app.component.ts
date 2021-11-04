import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <h2>{{ title }}</h2>
    <todo-app></todo-app>
    <todo-list-app></todo-list-app>`,
  styles: [
    `
      h2 {
        color: darkred;
      }
    `,
  ],
})
export class AppComponent {
  title: string = "Lista zadań";
}
