import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private todoService: TodoService, private router: Router) { 
    this.formGroup = new FormGroup({
      todo: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  
  onBtnSave() {
    this.todoService.addTodo(this.formGroup.get('todo').value);
    this.router.navigate(['/']);
  }
}
