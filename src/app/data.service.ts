import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=9752263a7f4c84ed4a1922957bdf0f9b')
  }
}
