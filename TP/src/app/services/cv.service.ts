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
  items=[{
    id:1,
    firstName:'jihed',
    lastName:'ben amara',
    image:'../../../assets/jihed.jpg',
    age:22,
    cin:14424644,
    job:'Student'
  },
  {
    id:2,
    firstName:'ahmed',
    lastName:'trigui',
    image:'../../../assets/ahmed.jpg',
    age:22,
    cin:14424645,
    job:'Student'},
    {
      id:3,
      firstName:'houaida',
      lastName:'mangour',
      image:'../../../assets/houaida.jpg',
      age:22,
      cin:14424646,
      job:'Student'},
      {
        id:4,
        firstName:'rahma',
        lastName:'heni',
        image:'../../../assets/rahma.jpg',
        age:22,
        cin:14424647,
        job:'Student'},
        {
          id:5,
          firstName:'anas',
          lastName:'bader',
          image:'../../../assets/anas.jpg',
          age:22,
          cin:14424648,
          job:'Student'} ];
getItembyId(id:number){
  this.selectedItem= this.items.find((item)=>item.id==id);
}
getCv(){
  console.log(this.http.get<any>(this.baseUrl));
  return this.http.get<any>(this.baseUrl);

}
}
