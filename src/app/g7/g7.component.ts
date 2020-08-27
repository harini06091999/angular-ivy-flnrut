import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g7',
  templateUrl: './g7.component.html',
  styleUrls: ['./g7.component.scss']
})
export class G7Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
