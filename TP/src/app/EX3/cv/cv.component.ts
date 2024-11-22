import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedItem: any = null; 
  onItemSelected(item: any) {
    this.selectedItem = item; 
  }
}
