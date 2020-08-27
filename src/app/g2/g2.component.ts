import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g2',
  templateUrl: './g2.component.html',
  styleUrls: ['./g2.component.scss']
})
export class G2Component implements OnInit {
  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }
}
