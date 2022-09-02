import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


   @Input() tempTask:Task = {
    title: " ",
    description: "",
    dueDate: "",
    isComplete: true,
    priority: 0,
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
