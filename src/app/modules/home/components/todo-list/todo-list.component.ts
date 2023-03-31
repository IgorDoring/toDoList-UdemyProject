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

  checkTask(i: number, check: boolean): void{
    this.todoList[i].checked = !this.todoList[i].checked;
  }

  deleteTask(i: number): void{
    let confirmation = confirm("Tem certeza sobre deletar?");
    if(confirmation)
      this.todoList.splice(i, i+1);
  }
}

export interface TaskList {
  task: string, 
  checked: boolean
}