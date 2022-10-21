import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  @Input() task =  '';

  constructor( @Inject(MAT_DIALOG_DATA)
  public data: { Tasks: Array<string>, I: number},
  public dialofRef: MatDialogRef<EditTasksComponent>) { }

  ngOnInit(): void {
  }

  edittask(): void {
    this.data.Tasks[this.data.I] = this.task;
    this.dialofRef.close();
  }
}
