import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
