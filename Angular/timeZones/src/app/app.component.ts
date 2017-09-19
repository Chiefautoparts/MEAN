import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = 'yellow';

  num = 1;
  logNum(){
  	console.log("num is ", this.num);
  }
}


