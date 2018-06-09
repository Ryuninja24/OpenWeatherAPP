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

  constructor(private http: Http) { }
  _getWeather(zip: String) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=79f9ea577e4ab0eb2fccd51913b6b075')
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
