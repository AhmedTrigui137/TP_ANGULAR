import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './EX3/cv/cv.component';
import { CartevisiteComponent } from './cartevisite/cartevisite.component';
import { ColorComponent } from './EX1/color/color.component';
import { MiniWordComponent } from './EX4/mini-word.component';
import { ArcencielComponent } from './EX5/arcenciel/arcenciel.component';
import { ParentComponent } from './parent/parent.component';
import { ImagenomComponent } from './imagenom/imagenom.component';
import { EmbaucheComponent } from './EX3/cv/embauche/embauche.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  
  { path: 'cv', component: CvComponent },
  { path: 'cartevisite', component: CartevisiteComponent }, 
  { path: 'color', component: ColorComponent }, 
  { path: 'miniworld',component: MiniWordComponent },
  { path: 'embauched',component: EmbaucheComponent },
  { path: 'arc', component: ArcencielComponent },  
  { path: 'parent', component: ParentComponent },
  { path: 'image', component: ImagenomComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'cv' },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
