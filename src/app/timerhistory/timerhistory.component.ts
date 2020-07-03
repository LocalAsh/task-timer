import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-timerhistory',
  templateUrl: './timerhistory.component.html',
  styleUrls: ['./timerhistory.component.scss']
})
export class TimerhistoryComponent implements OnInit {

  timers: any;
  times: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.timers = JSON.parse(localStorage.getItem("times"));
    this.timers.forEach(element => {
      this.times.push(element);
    });
  }
}
