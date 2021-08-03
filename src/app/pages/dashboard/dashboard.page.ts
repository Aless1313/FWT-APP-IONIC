import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPage implements OnInit, OnDestroy {

  percentageValue: (value: number) => string;

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50,
  };
  interval: any;
  constructor() {
    this.percentageValue = function (value: number): string {
      return `${Math.round(value)} / ${this['max']}`;
    };
   }

  ngOnInit(): void{
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 20),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100),
      };
  }
  const INTERVAL: number = 1000;
  
  this.interval = setInterval(updateValues, INTERVAL);
  updateValues();
  }

ngOnDestroy(): void {
  clearInterval(this.interval);
}
}
