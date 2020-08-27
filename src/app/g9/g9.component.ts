import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g9',
  templateUrl: './g9.component.html',
  styleUrls: ['./g9.component.scss']
})
export class G9Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
