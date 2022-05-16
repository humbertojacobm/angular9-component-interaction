import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-v2',
  templateUrl: './countdown-parent-v2.component.html',
  styleUrls: ['./countdown-parent-v2.component.css']
})
export class CountdownParentV2Component implements OnInit, AfterViewInit {
  @ViewChild(CountdownTimerComponent,{static:false})
  private timerComponent: CountdownTimerComponent;
  seconds() { return 0;}

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //this.seconds = this.timerComponent.seconds;
    //this.seconds = () => this.timerComponent.seconds;
    setTimeout(()=> this.seconds = () => this.timerComponent.seconds,0);

  }

  start(){
    this.timerComponent.start();
  }

  stop(){
    this.timerComponent.stop();
  }

}
