import { Component } from '@angular/core';
import { SensorComponent } from './piComponents/sensor.component'
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  template: `
        <nav class ="navbar">
            <h1 class="title">IoT Web Server</h1>
        </nav>
        <div class="firstDiv">
            <table> 
                <tr>
                <th *ngFor="let sensor of sensors" class="temperature">
                    {{sensor.title}}
                    <pi-sensor [sensorData]=sensor.value></pi-sensor>
                </th>             
                <tr>
                    <th class="numberOfDevs">Number of devices connected <h1>{{numberOfDevices}}</h1> </th>
                    <th class="energeticCost">Total energetic consume<h1>?</h1> </th>
                </tr>
            </table>
        </div>
  `,
directives: [SensorComponent],
providers: [AppService]
})

export class AppComponent {
    data = null;
    sensors = [];
    numberOfDevices = 0;
    constructor(private appService : AppService) { 
            setInterval(function(obj) {
                obj.getSensorData(obj);
            }, 5000, this);

     
    }
    
    ngOnInit() { this.getSensorData(this); }
    
    getSensorData(obj : AppComponent){
       obj.appService.getData()
                .subscribe(
                        data =>  obj.parseData(obj, data), 
                        error =>  console.log(<any>error));            
    }

    parseData(obj, data) {
        obj.sensors = [];
        this.numberOfDevices = data.numberOfDevices;
        data.data.forEach(element => {
            console.log(element);
            obj.sensors.push(element);
        });
    }
 }
