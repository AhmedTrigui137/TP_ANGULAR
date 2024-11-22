import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { DirectiveDirective } from './EX5/directive.directive';
import { ArcencielComponent } from './EX5/arcenciel/arcenciel.component';
import { CartevisiteComponent } from './cartevisite/cartevisite.component';
import { CvComponent } from './EX3/cv/cv.component';
import { ListeComponent } from './EX3/cv/liste/liste.component';
import { ItemComponent } from './EX3/cv/liste/item/item.component';
import { DetailComponent } from './EX3/cv/detail/detail.component';
import { ColorComponent } from './EX1/color/color.component';

// Modules
import { MiniWordModule } from './EX4/mini-word.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Third-party Modules
import { ColorPickerModule } from 'primeng/colorpicker';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './fils/fils.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ImagenomComponent } from './imagenom/imagenom.component';

@NgModule({
  declarations: [
    AppComponent,
    CartevisiteComponent,
    DirectiveDirective,
    ArcencielComponent,
    ColorComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    ParentComponent,
    ChildComponent,
    DefaultImagePipe,
    ImagenomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    FormsModule,
    MiniWordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
