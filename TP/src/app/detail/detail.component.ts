import { AfterContentChecked, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterContentChecked {
constructor(){}
  ngAfterContentChecked(): void {
    console.log(this.item);
  }
  
cvService=inject(CvService);
 item=this.cvService.selectedItem

}
