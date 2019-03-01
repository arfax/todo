import { Component } from '@angular/core';

interface Task {
 title: string,
 is_canceled: boolean
}

@Component({
 selector: 'home-root',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** array tasks */
  tasks: Array<Task> = [
   {
     title: "Go home",
     is_canceled: false
   },
   {
     title:"Take a nap",
     is_canceled: false
   },
   {
     title: "Start learning Angular with Sabuj",
     is_canceled: false
   }
  ];
  /** deleteTask() Delete task of the list */
  deleteTask(index: number) {
   let do_delete = confirm("Are you sure to delete the task?");
   if (do_delete){
     this.tasks.splice(index, 1);
   }
  }
  /** addTask() Add task to list **/
  addTask(value: string) {
   this.tasks.push(
     {
       title: value,
       is_canceled: false
     });
  }
  /** cancelTask() cancel task to list **/
  cancelTask(idx: number) {
     if (this.tasks[idx].is_canceled){
       this.tasks[idx].is_canceled = false;
     }else{
       this.tasks[idx].is_canceled = true;
     }
  }
}

