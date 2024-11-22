import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  textColor: string = 'black';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

  fonts: string[] = [
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Verdana',
  ];
}
