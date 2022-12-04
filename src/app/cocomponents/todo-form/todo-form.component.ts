import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';
import { v4 as uuid } from 'uuid';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit{
  todoTitle!: string;
  //for calling  service we have to use constructor 
  //we want to change our data base so we use service
  constructor(private todoservice:TodoService){

  }
  ngOnInit(): void {
    
  }
  handleAdd(){
    const newTodo:Todo={
      id:uuid(),
      title:this.todoTitle,
      isComplete:false,
      date:new Date,
    };
    this.todoservice.addTodo(newTodo);
    //after setting the title in the form title becomes empty
    this.todoTitle="";
  }
}
