import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  backgroundColor: string = 'blue'; 

  updateBackgroundColor(newColor: string) {
    this.backgroundColor = newColor;
  }
}
