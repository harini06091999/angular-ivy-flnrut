import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-g8',
  templateUrl: './g8.component.html',
  styleUrls: ['./g8.component.scss']
})
export class G8Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
