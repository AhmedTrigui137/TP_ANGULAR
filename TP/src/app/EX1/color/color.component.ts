import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color: string = ''; 
  divColor: string = 'white'; 

  resetColor() {
    this.divColor = 'white'; 
    this.color = ''; 
  }
  changeColor(newColor: string){
    this.color = newColor;
  }

}
