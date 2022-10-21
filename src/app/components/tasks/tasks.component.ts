import { Component, Input, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTasksComponent } from '../edit-tasks/edit-tasks.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input()
  tasks!: Array<string>;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OpenAddTaskDialog(tasks: Array<string>): void {
    this.dialog.open(AddTaskComponent, {
      data: {
        Tasks: tasks
      },
      width: '500px'
    });
  }

  OpenEditTaskDialog(tasks: Array<string>, i: number): void {
    this.dialog.open(EditTasksComponent, {
      data: {
        Tasks: tasks,
        I: i
      },
      width: '500px'
    });
  }

  markfinished(task: string): void {
    let completed = document.getElementById(task);
    completed?.classList.add('finished');
  }
  unmarkfinished(task: string): void {
    let uncompleted = document.getElementById(task);
    uncompleted?.classList.remove('finished');
  }

  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
  }
}
