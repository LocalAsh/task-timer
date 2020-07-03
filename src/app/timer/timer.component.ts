import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveTimerComponent } from '../save-timer/save-timer.component';

type Timer = {
  id: number;
  time: {};
};

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timers: Array<Timer> = [
  ];

  constructor(public dialog: MatDialog) { this.increaseTime = this.increaseTime.bind(this); }

  @Input() id: number;
  @Input() time: { minutes: number, seconds: number };
  @Output() deleted = new EventEmitter<number>();
  showHistory = false;
  timeIsRunning: boolean;
  canBeStopped: boolean;
  interval: any;
  currentTime: {};

  private increaseTime(): void {
    if (this.time.seconds === 59) {
      this.time.minutes++;
      this.time.seconds = 0;
    } else {
      this.time.seconds++;
    }
  }

  startTimer(): void {
    this.interval = setInterval(this.increaseTime, 1000);
    this.timeIsRunning = true;
    this.canBeStopped = true;
  }

  pauseTimer(): void {
    if (this.timeIsRunning) {
      this.timeIsRunning = false;
      clearInterval(this.interval);
      this.timeIsRunning = false;
    }
  }

  stopTimer(): void {
    this.currentTime = {
      minutes: this.time.minutes,
      seconds: this.time.seconds,
    };

    this.timers.push(
      { id: this.id, time: this.currentTime }
    );
    localStorage.setItem('times', JSON.stringify(this.timers));

    this.pauseTimer();
    this.time.minutes = 0;
    this.time.seconds = 0;
    this.showHistory = true;
    this.openCreateDialog();
  }

  openCreateDialog(): void {
    this.dialog.open(SaveTimerComponent, { width: '450px' });
  }

  ngOnInit(): void {
    this.timeIsRunning = false;
    this.canBeStopped = false;
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

}
