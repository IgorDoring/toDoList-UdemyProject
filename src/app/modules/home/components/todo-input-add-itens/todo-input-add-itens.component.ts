import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent {

  @Output() public emitTaskToAdd = new EventEmitter();
  
  public taskToAdd: string = "";

  public submitItemTaskList() {
    this.taskToAdd = this.taskToAdd.trim();

    if (this.taskToAdd) {
      this.emitTaskToAdd.emit(this.taskToAdd);
      this.taskToAdd = "";
    }
  };
}
