import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
@Component({
  selector: 'app-g4',
  templateUrl: './g4.component.html',
  styleUrls: ['./g4.component.scss']
})
export class G4Component implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}
  getCity(city)
  {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{this.weather=data;})
  }

}
