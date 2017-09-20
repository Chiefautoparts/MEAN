import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class TaskService {

	tasks = ['drink coffee or tea', 'build a web app'];

  constructor(private _http: Http) {
  	this._http.get('http://localhost.com:1337/tasks').subscribe(
  	(response) => {
  		// insert response from HTTP request 
  	},
  	(err) => {
  		// error object on failed/times out HTTP request
  	}
  )
  }

  retrieveTasks(){
  	return this.tasks;
  }

  createTask(task){
  	this.tasks.push(task);
  }
}
