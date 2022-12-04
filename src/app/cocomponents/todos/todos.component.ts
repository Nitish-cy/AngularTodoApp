import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
    todos!:Todo[];
    constructor(private todoService:TodoService){}
    ngOnInit(): void {
      this.todoService.getTodos().subscribe(todos=>{
        this.todos=todos;
      })
    }

    changeTodoStatus(todo:Todo)
    {
      this.todoService.changeStatus(todo);
    }
    deleteTodo(todo:Todo)
    {
        this.todoService.deleteTodo(todo);
    }
}
