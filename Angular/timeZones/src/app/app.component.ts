import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curTime = new Date();
  prevTime = null;

  selectTimeZone(timezone){
  	this.curTime = new Date();
  	if (timezone === 'Mountain') {
  		this.curTime.setTime(this.curTime.getHour() + 1);
  	} else if (timezone === 'Central') {
  		this.curTime.setTime(this.curTime.getHour() + 2 );
  	} else if (timezone === 'Eastern') {
  		this.curTime.setTime(this.curTime.getHour() + 3);
  	}
  	this.prevTime = timezone;
  }
}
