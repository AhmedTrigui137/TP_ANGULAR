import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

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
    this.cvService.getCv().subscribe({
      next:(res)=>{
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

  items:any[]=[];
  onItemClicked(item: any) {
    this.itemSelected.emit(item); // Emits the selected item to parent
  }
}
