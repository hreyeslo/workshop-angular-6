import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Module parts
import { PhotoComponent } from './component/photo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule {}
