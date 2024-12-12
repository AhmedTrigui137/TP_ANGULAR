import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { Cv } from '../cv';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  ngOnInit(): void {
   this.onGetItems();
  }
  onGetItems(){
    this.cvService.getCvs().subscribe({
      next:(res:Cv[])=>{
        console.log(res);
        this.items=res;
      },
      error:(err)=>{
        console.log('items error:'+err);
      }
    })
  }
  @Output() itemSelected: EventEmitter<any> = new EventEmitter(); 
  cvService=inject(CvService)

  items:Cv[]=[];
  onItemClicked(item:Cv) {
    this.itemSelected.emit(item); // Emits the selected item to parent
  }
}
