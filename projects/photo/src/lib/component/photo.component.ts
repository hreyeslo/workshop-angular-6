import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
// Component parts
import { defaultLiterals } from '../default.literals';
import { IPhotoLiterals } from '../photo.model';

@Component({
  selector: 'dogs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {

  @Input() literals: IPhotoLiterals = defaultLiterals;
  @Input() images: string[] = [];
  @Input() loading: boolean;

  constructor() { }

}
