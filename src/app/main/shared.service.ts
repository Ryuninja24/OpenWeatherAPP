import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  _localData = {
    temp: Number,
    humidity: Number,
    name: String,
    pressure: Number
  };

  _localDescription = {
    main: String,
    description: String,
    icon: String
  };

  icon: string;
  visibility: number;

  _showWeather = false;

  constructor(private http: Http) { }
  _getDayWeather(zip: String) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip='
    + zip + ',us&units=imperial&APPID=79f9ea577e4ab0eb2fccd51913b6b075')
    .pipe(map(
      (response: Response) => {
        this._showWeather = true;
        return response.json();
      }
    ));
  }
  _getWeekWeather(zip: String) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?zip='
    + zip + ',us&units=imperial&APPID=79f9ea577e4ab0eb2fccd51913b6b075')
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
