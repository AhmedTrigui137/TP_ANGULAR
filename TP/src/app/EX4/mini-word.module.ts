import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniWordComponent } from './mini-word.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';

@NgModule({
  declarations: [MiniWordComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
  ],
  exports: [MiniWordComponent],
})
export class MiniWordModule {}
