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
  onGet(zip: String) {
    this.sharedService._getWeather(zip)
    .subscribe(
      (data) => {
        console.log(data);
        this.sharedService._localData.temp = data.main.temp;
        this.sharedService._localData.humidity = data.main.humidity;
        this.sharedService._localData.name = data.name;
        this.sharedService._localData.pressure = data.main.pressure;
      }
    );
  }
}
