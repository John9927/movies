import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavabrComponent } from './navabar/navabr.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavabrComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavabrComponent, FooterComponent]
})
export class CoreModule { }
