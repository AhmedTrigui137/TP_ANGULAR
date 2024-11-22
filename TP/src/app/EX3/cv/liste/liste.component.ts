import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Output() itemSelected: EventEmitter<any> = new EventEmitter(); 

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
    id:1,
    firstName:'ahmed',
    lastName:'trigui',
    image:'../../../assets/ahmed.jpg',
    age:22,
    cin:14424645,
    job:'Student'} ];

  onItemClicked(item: any) {
    this.itemSelected.emit(item); // Emits the selected item to parent
  }
}
