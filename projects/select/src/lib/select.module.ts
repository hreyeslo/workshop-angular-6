import { NbSelectModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Module parts
import { SelectComponent } from './component/select.component';

@NgModule({
  imports: [
    CommonModule,
    NbSelectModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {}
