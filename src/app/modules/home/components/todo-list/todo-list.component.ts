import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  public todoList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');;

  constructor() { }

  ngDoCheck(): void{
    this.setLocalStorage()
  }

  checkTask(i: number, check: boolean): void{
    this.todoList[i].checked = !this.todoList[i].checked;
  }

  deleteTask(i: number): void{
    let confirmation = confirm("Tem certeza sobre deletar?");
    if(confirmation)
      this.todoList.splice(i, 1);
  }

  addTask(task: string) {
    return this.todoList.push({ task: task, checked: false });
  }

  deleteAllTasks(): void{
    let confirmation = confirm("Tem certeza sobre deletar todas as tarefas?");
    if(confirmation)
      this.todoList = [];
  }

  public setLocalStorage() {
    if (this.todoList) {
      this.todoList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.todoList));
    }
  }
}

export interface TaskList {
  task: string, 
  checked: boolean
}