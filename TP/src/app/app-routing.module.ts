import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './EX3/cv/cv.component';


const routes: Routes = [
  { path: 'cv', component: CvComponent }, 
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/cv' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
