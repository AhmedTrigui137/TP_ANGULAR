import { CvService } from 'src/app/services/cv.service';
import { Component, inject, OnInit } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from '../../detail/detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  
})
export class CvComponent implements OnInit {
  
  selectedItem: any ;
  cvs:any[]=[]
  acr=inject(ActivatedRoute);
  cvService=inject(CvService)
  color:any;
  ngOnInit(): void {
  this.acr.params.subscribe({
    next:(color)=>{this.color=color['color']}

  })
 
   console.log(this.acr);
   
  }

  onItemSelected(item: any) {
    
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

}
