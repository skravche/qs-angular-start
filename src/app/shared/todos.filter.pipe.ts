import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "todosFilter"
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: any[any], search: string = ""): any[] {
    if (!search.trim()) {
      return todos;
    }
    return todos.filter(todo => {
      return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
