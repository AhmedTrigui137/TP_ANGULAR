import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CartevisiteComponent } from './cartevisite/cartevisite.component';import { CvComponent } from './EX3/cv/cv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ListeComponent } from './EX3/cv/liste/liste.component';
import { ItemComponent } from './EX3/cv/liste/item/item.component';
import { DetailComponent } from './EX3/cv/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,ListeComponent,ItemComponent,DetailComponent, CartevisiteComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
