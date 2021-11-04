import { Component } from "@angular/core";

@Component({
  selector: "todo-app",
  template: `
    <label>
      <input type="text" [(ngModel)]="newTodoTitle" (keyup.enter)="addTodo()" />
    </label>
  `,
  styles: [``],
})
export class TodoComponent {
  newTodoTitle: string = "";

  addTodo() {
    console.log(this.newTodoTitle);
  }
}
