import { Component, OnInit } from "@angular/core";
import { TodosService } from "../shared/todos.service";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent implements OnInit {
  title: string = "";

  constructor(private todosService: TodosService) {}

  ngOnInit() {}
  addTodo() {
    const todo: any = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    };
    this.todosService.addTodo(todo);
  }
}
