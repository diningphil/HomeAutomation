import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'pi-sensor',
  template: `<h1>{{sensorData}}<h1>`,
})
export class SensorComponent { 
    @Input() sensorData: Object;
    constructor() {
    }
}