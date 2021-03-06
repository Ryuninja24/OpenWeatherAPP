import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {}
  dayGet(zip: String) {
    this.sharedService._getDayWeather(zip)
    .subscribe(
      (data) => {
        console.log(data);
        this.sharedService._localDescription.description = data.weather[0].description;
        this.sharedService.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        this.sharedService._localDescription.main = data.weather[0].main;
        this.sharedService._localData.temp = data.main.temp;
        this.sharedService._localData.humidity = data.main.humidity;
        this.sharedService._localData.name = data.name;
        this.sharedService._localData.pressure = data.main.pressure;
        this.sharedService.visibility = Math.round((data.visibility / 1609.344) * 100) / 100;
      }
    );
  }
  weekGet(zip: String) {
    this.sharedService._getWeekWeather(zip)
    .subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
