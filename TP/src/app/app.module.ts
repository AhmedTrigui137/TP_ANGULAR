import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { FormsModule } from '@angular/forms';
import { CartevisiteComponent } from './cartevisite/cartevisite.component';
@NgModule({
  declarations: [
    AppComponent,
    CartevisiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
