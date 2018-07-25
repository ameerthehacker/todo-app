import { Injectable } from '@angular/core';

export class TodoService {

  private todos: string[];

  constructor() { 
    this.todos = [];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  getTodos(): string[] {
    return this.todos;
  }
}
