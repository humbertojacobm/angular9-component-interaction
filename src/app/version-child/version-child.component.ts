import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    let log: string[]=[];
    for(let propName in changes){
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      changedProp.isFirstChange() && log.push(`Initial value of ${propName} set to ${to}`);
      !changedProp.isFirstChange() && log.push(`${propName} changed from ${JSON.stringify(changedProp.previousValue)} to ${to}`)
    }
    this.changeLog.push(log.join(', '));
  }

}
