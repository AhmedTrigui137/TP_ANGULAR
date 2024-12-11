import { AfterContentChecked, Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
constructor(){}
  ngOnInit(): void {
    this.item=this.cvService.selectedItem
  }
  ngAfterContentChecked(): void {
    console.log(this.item);
  }
  
cvService=inject(CvService);
 item:any;

}
