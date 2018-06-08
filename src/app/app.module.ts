import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherViewComponent } from './main/weather-view/weather-view.component';
import { FormComponent } from './main/form/form.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
