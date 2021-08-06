import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaugetest',
  templateUrl: './gaugetest.page.html',
  styleUrls: ['./gaugetest.page.scss'],

})
export class GaugetestPage implements OnInit {

  gaugeValue = 17;
  thresholdConfig={
    '0': {color: 'green' },
    '7': {color: 'orange' },
    '15': {color: 'red' }
  };

  constructor() { }

  ngOnInit() {
  }

}
