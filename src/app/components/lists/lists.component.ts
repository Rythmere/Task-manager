import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: any[] = [{name:"To-Do", items:['groceries', 'Study', 'exercise']},{name:"Chores", items:['Laundry', 'Dishes', 'Clean Bedroom']}];
  tasks: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  SetActiveList(list: Array<string>): void {
    this.tasks = list;
    console.log(this.tasks);
  }

}
