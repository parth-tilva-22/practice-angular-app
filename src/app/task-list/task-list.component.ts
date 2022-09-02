import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    taskList = [{
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  },
  {
    title: "Completed budgeting for FY 2023",
    description: "Budgeting for FY 2023 this is required by the finance depeartment. A further longer description is possible.",
    dueDate: "26th aug 2022",
    isComplete: false,
    priority: 3,
  }   ]

  constructor() { }

  ngOnInit(): void {
  }

}
