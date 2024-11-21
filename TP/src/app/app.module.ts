import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDirective } from './EX5/directive.directive';
import { ArcencielComponent } from './EX5/arcenciel/arcenciel.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDirective,
    ArcencielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
