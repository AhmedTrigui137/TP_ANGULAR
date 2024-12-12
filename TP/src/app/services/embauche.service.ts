import { Cv } from '../EX3/cv/cv';
import { CvComponent } from './../EX3/cv/cv.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  constructor() { }
  embauches:Cv[]=[]
}
