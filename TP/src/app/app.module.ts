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

import { ColorComponent } from './EX1/color/color.component';

// Modules
import { MiniWordModule } from './EX4/mini-word.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Third-party Modules
import { ColorPickerModule } from 'primeng/colorpicker';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './fils/fils.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ImagenomComponent } from './imagenom/imagenom.component';
import { EmbaucheComponent } from './EX3/cv/embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './authentication/login/login.component';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';



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
    ImagenomComponent,
    EmbaucheComponent,
    HeaderComponent,
    LoginComponent,
    ImageComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    FormsModule,
    MiniWordModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
