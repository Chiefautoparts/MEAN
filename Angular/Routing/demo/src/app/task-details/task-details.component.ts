import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
	task: Task;

	constructor(private _route: ActivatedRoute, private _taskService: TaskService){
		this._routeparamMap
			.switchMap(param => {
				console.log("TaskDetailsComponent loaded and url id given is: ", params.get("id"));
			}).subscribe(task => this.task = task);
	}
}


