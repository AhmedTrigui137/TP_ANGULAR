import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from 'src/EX1/color/color.component';

const routes: Routes = [
  { path: 'color', component: ColorComponent },
  { path: '', redirectTo: '/color', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
