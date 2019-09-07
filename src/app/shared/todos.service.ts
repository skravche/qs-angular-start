import { Injectable } from "@angular/core";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({ providedIn: "root" })
export class TodosService {
  public todos: Todo[] = [
    { id: 1, title: "Tickets1", completed: false, date: new Date() },
    { id: 2, title: "Tickets2", completed: false, date: new Date() },
    { id: 3, title: "Tickets3", completed: false, date: new Date() },
    { id: 4, title: "Tickets4", completed: true, date: new Date() },
    { id: 5, title: "Tickets5", completed: false, date: new Date() }
  ];
  onToggle(id: number) {
    console.log(id);
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
