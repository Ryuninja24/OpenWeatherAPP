import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
  }

}
