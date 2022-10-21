import { Component, Input } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<string> = ['groceries', 'Study', 'exercise'];
  title = 'Task-manager';
  constructor(public dialog: MatDialog) {}

}
