import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// Component parts
import { SelectItems, ISelectItem, ISelectLiterals } from '../select.model';
import { defaultLiterals } from '../default.literals';

@Component({
  selector: 'dogs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  @Input() literals: ISelectLiterals = defaultLiterals;
  @Input() items: SelectItems = [];
  @Input() selectedItem: string;

  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  trackBy(index: number, item: ISelectItem): string {
    return item.value;
  }

}
