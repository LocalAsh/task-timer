import { Component, OnInit } from '@angular/core';

type Timer = {
  time: { minutes: number, seconds: number };
};

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {

  constructor() { }

  timers: Array<Timer> = [
    { time: { minutes: 0, seconds: 0 } }
  ];

  ngOnInit(): void {
  }

}
