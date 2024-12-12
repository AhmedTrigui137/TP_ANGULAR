import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cv } from '../EX3/cv/cv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectedItem?:Cv;
  baseUrl:string='https://apilb.tridevs.net/api/personnes'

  constructor() { }
  http=inject(HttpClient)
  

getCvs():Observable<Cv[]>{
  console.log(this.http.get<any>(this.baseUrl));
  return this.http.get<Cv[]>(this.baseUrl);

}
}
