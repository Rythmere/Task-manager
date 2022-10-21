import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() task =  '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { Tasks: Array<string>},
    public dialofRef: MatDialogRef<AddTaskComponent>
  ) { }

  ngOnInit(): void {
  }

  addtask(): void {
    this.data.Tasks.push(this.task);
    this.dialofRef.close();
  }

}
