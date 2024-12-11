import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectedItem:any;
  baseUrl:string='https://apilb.tridevs.net/api/personnes'

  constructor() { }
  http=inject(HttpClient)
  

getCv(){
  console.log(this.http.get<any>(this.baseUrl));
  return this.http.get<any>(this.baseUrl);

}
}
