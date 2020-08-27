import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g6',
  templateUrl: './g6.component.html',
  styleUrls: ['./g6.component.scss']
})
export class G6Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
