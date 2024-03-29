import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy(){
    this.clearTime();
  }

  clearTime() {clearInterval(this.intervalId)}

  start(){
    this.countDown();
  }

  stop(){
    this.clearTime();
    this.message=`Holding at T-${this.seconds} seconds`;
  }

  private countDown(){
    this.clearTime();
    this.intervalId = window.setInterval(()=> {
      this.seconds -=1;
      if(this.seconds === 0) {
        this.message = "Blast Off!!";
      }else{
        if(this.seconds < 0){ this.seconds = 10; } //reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    },1000);
  }

}
