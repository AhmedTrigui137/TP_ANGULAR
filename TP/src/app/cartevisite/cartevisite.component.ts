import { Component } from '@angular/core';

@Component({
  selector: 'app-cartevisite',
  templateUrl: './cartevisite.component.html',
  styleUrls: ['./cartevisite.component.css']
})
export class CartevisiteComponent {
  name: string = 'Inna ';
  surname: string = 'Corman';
  job: string = 'Product Manager';
  coverImage: string = 'assets/images/rotating_card_thumb3.png';
  profileImage: string = 'assets/images/rotating_card_profile.png';
  favoriteQuote: string = '"I\'m the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"';
  jobDescription: string = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';
  motto: string = '"To be or not to be, this is my awesome motto!"';
}
