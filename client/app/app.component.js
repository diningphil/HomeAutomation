"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sensor_component_1 = require('./piComponents/sensor.component');
var app_service_1 = require('./app.service');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.data = null;
        this.sensors = [];
        this.numberOfDevices = 0;
        setInterval(function (obj) {
            obj.getSensorData(obj);
        }, 5000, this);
    }
    AppComponent.prototype.ngOnInit = function () { this.getSensorData(this); };
    AppComponent.prototype.getSensorData = function (obj) {
        obj.appService.getData()
            .subscribe(function (data) { return obj.parseData(obj, data); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.parseData = function (obj, data) {
        obj.sensors = [];
        this.numberOfDevices = data.numberOfDevices;
        data.data.forEach(function (element) {
            console.log(element);
            obj.sensors.push(element);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <nav class =\"navbar\">\n            <h1 class=\"title\">IoT Web Server</h1>\n        </nav>\n        <div class=\"loading\"></div>\n        <div class=\"firstDiv\">\n            <table> \n                <tr>\n                <th *ngFor=\"let sensor of sensors\" class=\"temperature\">\n                    {{sensor.title}}\n                    <pi-sensor [sensorData]=sensor.value></pi-sensor>\n                </th>             \n                <tr>\n                    <th class=\"numberOfDevs\">Number of devices connected <h1>{{numberOfDevices}}</h1> </th>\n                    <th class=\"energeticCost\">Total energetic consume<h1>?</h1> </th>\n                </tr>\n            </table>\n        </div>\n  ",
            directives: [sensor_component_1.SensorComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map