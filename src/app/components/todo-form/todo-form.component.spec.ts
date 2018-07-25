import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TodoFormComponent } from './todo-form.component';

import { TodoService } from '../../services/todo.service';
import { By } from '@angular/platform-browser';

class RouterStub {
  navigate(params) {}
}

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let newTodo: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ],
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        },
        TodoService
      ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    // Arrange
    newTodo = 'new todo!';
    component.formGroup.get("todo").setValue(newTodo);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call todoService.addTodo on save clicked', () => {
    // Arrange
    const todoService = TestBed.get(TodoService);
    spyOn(todoService, 'addTodo');
    // Act
    component.onBtnSave();
    // Assert
    expect(todoService.addTodo).toHaveBeenCalledWith(newTodo);
  });

  it('should navigate to / on save clicked', () => {
    // Arrange
    const router = TestBed.get(Router);
    component.formGroup.get('todo').setValue(newTodo);
    spyOn(router, 'navigate');
    // Act
    // Act
    component.onBtnSave();
    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/']);

  });
});
