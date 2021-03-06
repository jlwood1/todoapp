import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;
  todoId:number = 200; 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoId++; 
    const todo = {
      id: this.todoId,
      title: this.title,
      completed: false 
    }
    this.addTodo.emit(todo)
  }
}
