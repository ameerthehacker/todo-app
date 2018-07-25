import { Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'new',
    component: TodoFormComponent
  }
];