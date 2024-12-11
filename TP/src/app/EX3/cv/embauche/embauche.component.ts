import { Component, inject } from '@angular/core';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  constructor(){}
  embaucheService=inject(EmbaucheService);
  embauched=this.embaucheService.embauches
}
