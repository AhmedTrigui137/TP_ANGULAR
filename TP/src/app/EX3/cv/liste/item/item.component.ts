import { CvService } from 'src/app/services/cv.service';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from 'src/app/services/embauche.service';
import { Router } from '@angular/router';
import { Cv } from '../../cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item?:Cv; 
  embaucheService=inject(EmbaucheService);
  CvService=inject(CvService);
  tstr=inject(ToastrService)
  router=inject(Router);
 
  embauche(item:any) {
    console.log(item);
    if(this.embaucheService.embauches.some((embauched)=> embauched.cin==item.cin))
    {
      this.tstr.error('Employee already exists','ERROR');

    }
    else{
      console.log(this.embaucheService.embauches);
    this.embaucheService.embauches.push(item);
    this.tstr.success('Employee added successfully','Success');}
    }
    afficherDetails(item?:Cv) {
      this.CvService.selectedItem=item;
      this.router.navigate(['detail']);
       
      
      }
      
}
