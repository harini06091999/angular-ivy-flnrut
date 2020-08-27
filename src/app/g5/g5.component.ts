import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g5',
  templateUrl: './g5.component.html',
  styleUrls: ['./g5.component.scss']
})
export class G5Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
