import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class ChildComponent {
  @Input() parentColor!: string; 
  @Output() colorChange = new EventEmitter<string>(); 

  myFavoriteColor: string = 'yellow'; 

  
  changeParentColor() {
    this.colorChange.emit(this.myFavoriteColor);
  }
}
