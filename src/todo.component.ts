import { Component } from "@angular/core";
import { Todo } from "./todo.model";

@Component({
  selector: "todo-app",
  template: `
    <label>
      <input type="text" [(ngModel)]="newTodoTitle" (keyup.enter)="addTodo()" />
    </label>
    <button type="submit" (click)="addTodo()">Dodaj zadanie</button>
    <ul>
      <li *ngFor="let todo of todos; let ind = index">
        <input
          class="cursor-pointer"
          type="checkbox"
          [(ngModel)]="todo.complete"
        />
        <span [ngClass]="{ checked: todo.complete }">{{ todo.title }}</span>
        <span class="cursor-pointer" (click)="deleteTodo(ind)">[X]</span>
      </li>
    </ul>
  `,
  styles: [
    `
      .cursor-pointer {
        cursor: pointer;
      }
      .checked {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoComponent {
  newTodoTitle: string = "";

  todos: Todo[] = [
    { title: "zakupy", complete: true },
    { title: "kino", complete: false },
  ];

  addTodo() {
    if (!this.newTodoTitle) return;
    else {
      const newTodo: Todo = {
        title: this.newTodoTitle,
        complete: false,
      };
      this.todos.push(newTodo);
      this.newTodoTitle = "";
    }
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}
