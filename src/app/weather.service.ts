import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url='http://api.openweathermap.org/data/2.5/weather';
  apikey='9b0cc5fbfd9dcbb55f7b55bfa8aa3065';

  constructor(private http:HttpClient) { }
    getWeatherDataByCityName(city:string)
    {
      let params=new HttpParams()
      .set('q',city)
      .set('units','imperial')
      .set('appid',this.apikey)
      return this.http.get(this.url,{params})
    }
  }
