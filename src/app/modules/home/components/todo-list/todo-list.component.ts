import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  public todoList: Array<TaskList> = [];

  mock(){
    this.todoList.push({task: "task ", checked: false});
    this.todoList.push({task: "task a", checked: false});
    this.todoList.push({task: "task b", checked: false});
    this.todoList.push({task: "task c", checked: false});
    this.todoList.push({task: "task d", checked: true});
    this.todoList.push({task: "task e", checked: true});
    console.log(this.todoList.length);
  }

  constructor() { }

  ngOnInit(): void{
    this.mock();
  }
}

export interface TaskList {
  task: string, 
  checked: boolean
}