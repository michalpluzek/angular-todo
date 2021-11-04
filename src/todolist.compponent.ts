import { Component } from "@angular/core";
import { Todo } from "./todo.model";

@Component({
  selector: "todo-list-app",
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" [(ngModel)]="todo.complete" />{{ todo.title }}
      </li>
    </ul>
  `,
  styles: [``],
})
export class TodoListComponent {
  todos: Todo[] = [
    { title: "zakupy", complete: true },
    { title: "kino", complete: false },
  ];
}
